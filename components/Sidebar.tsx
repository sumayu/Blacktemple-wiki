'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { knowledgeBase } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/LanguageProvider';

export function Sidebar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  return (
    <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 bg-zinc-950 border-r border-zinc-800 z-50">
      <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2 transition-colors">
          <div className="w-6 h-6 bg-white rotate-45 shrink-0"></div>
          <span className="font-semibold text-xl tracking-tighter text-white">BlackTemple</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        <div>
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
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded transition-colors text-sm",
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
      </nav>
      
      <div className="p-6 border-t border-zinc-900 flex justify-end items-center">
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
           <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}>RU</button>
           <span className="text-zinc-800">/</span>
           <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}>EN</button>
        </div>
      </div>
    </aside>
  );
}
