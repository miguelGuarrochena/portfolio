'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';
import { ColorSchemeScript } from '@mantine/core';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect } from 'react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <html lang={locale} translate="no" className={spaceGrotesk.variable}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="google" content="notranslate" />
        <title>Miguel Guarrochena - Frontend Developer</title>
        <meta name="description" content="Frontend Developer with experience in building responsive, high-performance web applications using React, Next.js, TypeScript, and modern CSS frameworks." />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
