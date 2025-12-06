'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { en } from '@/dictionaries/en';
import { es } from '@/dictionaries/es';

const dictionaries = {
  en,
  es,
} as const;

export type Locale = keyof typeof dictionaries;

export const useTranslation = () => {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Initialize with default values that work on the server
  const [locale, setLocaleState] = useState<Locale>('en');
  const [t, setT] = useState(dictionaries.en);

  // Only access browser APIs after component mounts
  useEffect(() => {
    setMounted(true);
    
    // Get language from URL or localStorage
    const langFromUrl = searchParams?.get('lang');
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    
    const newLocale = (langFromUrl || savedLang || 'en') as Locale;
    
    if (dictionaries[newLocale]) {
      setLocaleState(newLocale);
      setT(dictionaries[newLocale]);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLocale);
      }
    }
  }, [searchParams]);

  const setLocale = async (newLocale: Locale) => {
    if (!mounted) return;
    
    if (!dictionaries[newLocale]) {
      console.error(`Invalid locale: ${newLocale}`);
      return;
    }
    
    // Update state
    setLocaleState(newLocale);
    setT(dictionaries[newLocale]);
    
    // Update URL
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('lang', newLocale);
    
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLocale);
    }
    
    // Update URL without causing a full page reload
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { t, locale, setLocale };
};
