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
      locale: (() => {
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('language-storage');
          if (!saved) {
            const browserLang = navigator.language.split('-')[0];
            return ['en', 'es'].includes(browserLang) ? browserLang as Locale : 'en';
          }
        }
        return 'en';
      })(),
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
