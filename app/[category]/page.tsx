'use client';

import { use } from 'react';
import { getCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = use(params);
  const category = getCategoryBySlug(categorySlug);
  const { lang, t } = useLanguage();
  
  if (!category) return notFound();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 max-w-2xl pt-4">
        <h1 className="text-4xl font-light text-white mb-4 tracking-tight">{category.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.guides.length === 0 ? (
          <div className="col-span-full border border-zinc-800 p-6 bg-zinc-900/20 text-center">
            <p className="text-zinc-500 text-sm">
              {t('В этой категории пока нет инструкций.', 'No guides in this category yet.')}
            </p>
          </div>
        ) : (
          category.guides.map((guide) => (
            <div key={guide.slug} className="border border-zinc-800 p-6 bg-zinc-900/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">
                  {t('Инструкция', 'Instruction')}
                </span>
                <h2 className="text-xl text-white mb-3">{guide.title[lang]}</h2>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">{guide.description[lang]}</p>
              </div>
              <div className="flex justify-start">
                  <Link 
                    href={`/${category.slug}/${guide.slug}`}
                    className="bg-zinc-100 text-zinc-950 px-4 py-2 text-[10px] font-bold uppercase tracking-tighter hover:bg-white transition-colors"
                  >
                    {t('Смотреть', 'View Guide')}
                  </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
