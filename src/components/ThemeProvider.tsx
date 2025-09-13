'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { useThemeStore } from '@/store/themeStore';
import { useEffect, useState } from 'react';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add class to body when color scheme changes
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
      {children}
    </MantineProvider>
  );
}
