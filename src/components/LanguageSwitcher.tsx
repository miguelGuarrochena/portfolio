'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation, type Locale } from '@/hooks/useTranslation';
import { ActionIcon, Group } from '@mantine/core';

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = async (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    try {
      // Update the URL with the new language
      const params = new URLSearchParams(searchParams?.toString() || '');
      params.set('lang', newLocale);
      
      // Update the store and localStorage
      await setLocale(newLocale);
      
      // Update the URL without causing a full page reload
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <Group gap="xs">
      <ActionIcon
        variant={locale === 'en' ? 'filled' : 'outline'}
        color="blue"
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
        disabled={locale === 'en'}
      >
        EN
      </ActionIcon>
      <ActionIcon
        variant={locale === 'es' ? 'filled' : 'outline'}
        color="blue"
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a español"
        disabled={locale === 'es'}
      >
        ES
      </ActionIcon>
    </Group>
  );
}
