'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { useThemeStore } from '@/store/themeStore';
import { useEffect, useState } from 'react';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  primaryColor: 'dark',
  fontFamily: 'var(--font-space-grotesk), sans-serif',
  headings: {
    fontFamily: 'var(--font-instrument-serif), Georgia, serif',
    fontWeight: '400',
  },
  defaultRadius: 'md',
  colors: {
    dark: [
      '#f3f0ea',
      '#d8d2c8',
      '#bdb5a8',
      '#a19889',
      '#857b6c',
      '#6a6054',
      '#4f473d',
      '#342e27',
      '#1a1712',
      '#0e0e0d',
    ],
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'lg',
      },
    },
    Drawer: {
      styles: (theme: { colorScheme: string; colors: { dark: string[] }; white: string }) => ({
        content: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
      }),
    },
    Modal: {
      defaultProps: {
        radius: 'lg',
      },
    },
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (colorScheme === 'dark') {
      document.body.classList.add('mantine-dark');
      document.body.classList.remove('mantine-light');
    } else {
      document.body.classList.add('mantine-light');
      document.body.classList.remove('mantine-dark');
    }
  }, [colorScheme]);

  if (!mounted) {
    return (
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    );
  }

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={colorScheme}
      forceColorScheme={colorScheme}
    >
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
