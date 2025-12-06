import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(\w+$)/;
const LOCALE_COOKIE = 'NEXT_LOCALE';
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'es'] as const;

export function middleware(request: NextRequest) {
  // Skip static files and API routes
  if (
    PUBLIC_FILE.test(request.nextUrl.pathname) ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next();
  }

  // Check for existing language cookie
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  
  // If we have a valid cookie, use it
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as any)) {
    return withLocaleCookie(NextResponse.next(), cookieLocale);
  }

  // Try to determine language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  const preferredLocale = acceptLanguage?.split(',')?.[0]?.split('-')?.[0]?.toLowerCase();
  const detectedLocale = (SUPPORTED_LOCALES as readonly string[]).includes(preferredLocale || '') 
    ? preferredLocale as string 
    : DEFAULT_LOCALE;

  // Set the locale cookie and continue
  return withLocaleCookie(NextResponse.next(), detectedLocale);
}

// Helper function to set the locale cookie
function withLocaleCookie(response: NextResponse, locale: string) {
  if (!response.cookies.get(LOCALE_COOKIE)) {
    response.cookies.set({
      name: LOCALE_COOKIE,
      value: locale,
      path: '/',
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: 'lax',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap files
     * - robots.txt
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots.txt).*)',
  ],
};
