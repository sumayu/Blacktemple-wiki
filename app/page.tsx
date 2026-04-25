'use client';

import Link from 'next/link';
import { knowledgeBase } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-light text-white mb-4 tracking-tight">
          {t('Центр поддержки', 'Support Center')}
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {t(
            'Гайды, документация и решение типичных проблем в одном месте.',
            'Guides, documentation, and troubleshooting in one place.'
          )}
        </p>
      </section>

      {/* Quick Links Grid */}
      <section className="space-y-6 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knowledgeBase.map((category) => {
            return (
              <Link 
                key={category.slug}
                href={`/${category.slug}`}
                className="group border border-zinc-800 p-6 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">
                      {t('Платформа', 'Platform')}
                    </span>
                    <h2 className="text-xl text-white group-hover:text-zinc-100 transition-colors">{category.name}</h2>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button className="bg-zinc-100 text-zinc-950 px-4 py-2 text-[10px] font-bold uppercase tracking-tighter hover:bg-white transition-colors">
                      {t('Открыть', 'View Platform')}
                    </button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
}
