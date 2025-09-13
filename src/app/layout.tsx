import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
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
