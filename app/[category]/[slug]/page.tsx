'use client';

import { use } from 'react';
import { getGuideBySlug, getCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { CopyButton } from '@/components/CopyButton';
import Markdown from 'react-markdown';

export default function GuidePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { category: categorySlug, slug: guideSlug } = use(params);
  const category = getCategoryBySlug(categorySlug);
  const guide = getGuideBySlug(categorySlug, guideSlug);
  const { lang, t } = useLanguage();

  if (!category || !guide) return notFound();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-8">
        <Link href="/" className="hover:text-zinc-300 transition-colors">{t('Главная', 'Home')}</Link>
        <span className="text-zinc-700">/</span>
        <Link href={`/${category.slug}`} className="hover:text-zinc-300 transition-colors">{category.name}</Link>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-300 truncate">{guide.title[lang]}</span>
      </nav>

      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-light text-white mb-4 tracking-tight">{guide.title[lang]}</h1>
        <p className="text-lg text-zinc-400 leading-relaxed">{guide.description[lang]}</p>
      </div>

      {guide.warning && (
        <div className="border border-amber-900/30 bg-amber-950/10 p-6 mb-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-amber-900/30 flex items-center justify-center shrink-0">
              <span className="text-amber-500 font-bold">!</span>
            </div>
            <div>
              <h3 className="text-amber-200 text-sm font-bold mb-1">{t('Внимание', 'Warning')}</h3>
              <p className="text-amber-200/60 text-xs leading-relaxed">{guide.warning[lang]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="space-y-6 pt-4">
        {guide.steps.map((step, index) => (
          <div key={index} className="flex gap-8 border-t border-zinc-900 pt-8 first:border-0 first:pt-0">
            {/* Step Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-6 h-6 border border-zinc-700 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="text-white font-medium">{step.title[lang]}</h4>
              </div>

              <div className="pl-10 space-y-4">
                {step.text && (
                  <div className="text-sm text-zinc-500 leading-relaxed whitespace-pre-wrap prose prose-invert prose-zinc max-w-none prose-p:my-0">
                    <Markdown
                      components={{
                        a: ({node, ...props}) => (
                          <a 
                            {...props} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-medium text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white hover:text-zinc-200 hover:bg-zinc-800/50 transition-all rounded px-0.5 mx-0.5"
                          />
                        )
                      }}
                    >
                      {step.text[lang]}
                    </Markdown>
                  </div>
                )}
                
                {step.code && (
                  <div className="border border-zinc-800 p-6 bg-zinc-900/40 relative group mt-4">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-2">{t('Код', 'Code Snippet')}</span>
                    <div className="flex items-center justify-between bg-black p-3 border border-zinc-800">
                      <code className="text-zinc-400 text-xs font-mono whitespace-pre-wrap break-all">{step.code}</code>
                      <div className="ml-4 shrink-0 -translate-y-1 self-start">
                        <CopyButton text={step.code} />
                      </div>
                    </div>
                  </div>
                )}
                
                {step.link && (
                  <div className="mt-6">
                    <a 
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                    >
                      {step.linkText ? step.linkText[lang] : t('Открыть ссылку', 'Open link')}
                    </a>
                  </div>
                )}

                {step.internalLink && (
                  <div className="mt-6">
                    <Link 
                      href={step.internalLink.url}
                      className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
                    >
                      {step.internalLink.text[lang]}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
