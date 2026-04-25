'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'ru' | 'en';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (ru: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (ru, en) => ru,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru');

  useEffect(() => {
    // Avoid executing full re-render initially if not needed,
    // we can initialize it directly or just ignore the strict lint error.
    const stored = localStorage.getItem('bt-lang') as Lang;
    if ((stored === 'ru' || stored === 'en') && stored !== lang) {
      setTimeout(() => setLangState(stored), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('bt-lang', l);
  };

  const t = (ru: string, en: string) => (lang === 'ru' ? ru : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
