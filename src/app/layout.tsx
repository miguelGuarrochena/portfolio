import type { Metadata } from 'next';
import { ColorSchemeScript } from '@mantine/core';
import { Instrument_Serif, Space_Grotesk, Dancing_Script } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/ThemeProvider';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-instrument-serif',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-hand',
});

export const metadata: Metadata = {
  title: 'Miguel Guarrochena — Frontend & Product Developer',
  description:
    'Frontend & product developer building digital experiences that solve real problems with clean code and attention to detail.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/icon.svg?v=2', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${dancingScript.variable}`}
    >
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
