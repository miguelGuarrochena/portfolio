import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Miguel Guarrochena - Frontend Developer',
  description: 'Frontend Developer with experience in building responsive, high-performance web applications using React, Next.js, TypeScript, and modern CSS frameworks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <MantineProvider>
            <Notifications />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
