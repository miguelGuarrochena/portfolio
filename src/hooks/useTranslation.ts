import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en } from '@/dictionaries/en';
import { es } from '@/dictionaries/es';

export type Locale = 'en' | 'es';

interface LanguageState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: 'en',
      setLocale: (locale: Locale) => set({ locale }),
    }),
    {
      name: 'language-storage',
    }
  )
);

const dictionaries = {
  en,
  es,
};

export function useTranslation() {
  const { locale, setLocale } = useLanguageStore();
  
  return {
    t: dictionaries[locale],
    locale,
    setLocale,
  };
}
