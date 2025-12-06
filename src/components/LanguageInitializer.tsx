'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useTranslation, Locale } from '@/hooks/useTranslation';

interface LanguageInitializerProps {
  initialLocale: Locale;
}

export function LanguageInitializer({ initialLocale }: LanguageInitializerProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { setLocale } = useTranslation();
  
  useEffect(() => {
    // Check for language in URL params first
    const urlLang = searchParams?.get('lang');
    if (urlLang === 'en' || urlLang === 'es') {
      setLocale(urlLang);
      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', urlLang);
      }
      return;
    }

    // Otherwise use the initial locale
    setLocale(initialLocale);
    
    // Update URL to include the language if not present
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (!params.has('lang')) {
      params.set('lang', initialLocale);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [initialLocale, searchParams, setLocale, pathname, router]);

  return null;
}
