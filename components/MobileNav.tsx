'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { knowledgeBase } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/components/LanguageProvider';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <header className="md:hidden fixed top-0 w-full h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-5 h-5 bg-white rotate-45 shrink-0"></div>
          <span className="font-semibold text-lg tracking-tighter text-white">BlackTemple</span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-zinc-950 z-40 overflow-y-auto pb-6"
          >
            <nav className="p-4 flex flex-col h-[calc(100vh-5rem)]">
              <div className="flex-1">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">
                  {t('Платформы', 'Platforms')}
                </h4>
                <ul className="space-y-1">
                  {knowledgeBase.map((category) => {
                    const isActive = pathname.startsWith(`/${category.slug}`);
                    
                    return (
                      <li key={category.slug}>
                        <Link
                          href={`/${category.slug}`}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded transition-colors text-sm",
                            isActive 
                              ? "bg-zinc-900 text-white" 
                              : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                          )}
                        >
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full shrink-0",
                            isActive ? "bg-zinc-400" : "bg-transparent border border-zinc-700"
                          )}></div>
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="border-t border-zinc-900 pt-6 mt-6 pb-8 flex justify-end items-center">
                <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
                   <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}>RU</button>
                   <span className="text-zinc-800">/</span>
                   <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}>EN</button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
