'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

function ExpandableImage({ src, alt }: { src: string; alt: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => setIsExpanded(true)}
      />
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-pointer animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default function PodkopInstruction() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-3xl font-light tracking-tight text-white mb-4">Актуальные баги: Восстановление Telegram 🧧 BLACKTEMPLE.SPACE</h1>
      </header>

      <div className="space-y-12">
        {/* iOS Solution */}
        <section className="border-t border-zinc-900 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 shrink-0">
              <span className="text-sm font-mono text-white">iOS</span>
            </div>
            <h2 className="text-xl font-medium text-white">1. Решение для iOS (iPhone, iPad)</h2>
          </div>

          <div className="pl-14 space-y-8">
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              Выберите один из двух вариантов восстановления работы Telegram на iOS:
            </p>

            {/* Option A: Happ */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
                Вариант А: Использование альтернативного клиента Happ
              </h3>
              <div className="text-sm text-zinc-400 leading-relaxed">
                <p className="mb-4">Если стандартное приложение не подключается, используйте клиент <strong>Happ</strong>, поддерживающий протокол VLESS.</p>
                
                <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl space-y-6">
                  <div>
                    <p className="font-semibold text-zinc-100 text-base mb-2">Шаг 1: Установка</p>
                    <p>Скачайте приложение из App Store: <a href="https://apps.apple.com/us/app/happ-proxy-utility/id6504287215" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Happ - Proxy Utility</a></p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/50">
                    <p className="font-semibold text-zinc-100 text-base mb-2">Шаг 2: Получение и настройка VLESS</p>
                    <ol className="list-decimal ml-5 space-y-3 text-zinc-300">
                      <li>
                        <strong className="text-white">Войдите в личный кабинет</strong><br />
                        Откройте сайт <a href="https://blacktemple.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">blacktemple.online</a> или Telegram-бота <strong className="text-white">@blacktemple_space_bot</strong>.
                      </li>
                      <li>
                        <strong className="text-white">Найдите раздел «Мои устройства»</strong><br />
                        Пролистайте главную страницу вниз до списка ваших активных устройств.
                      </li>
                      <li>
                        <strong className="text-white">Выберите устройство</strong><br />
                        Нажмите на название нужного устройства (например, «Основной»).
                      </li>
                      <li>
                        <strong className="text-white">Смените протокол</strong><br />
                        В открывшемся меню найдите пункт «Протокол». Нажмите на текущий протокол и выберите из списка <strong>VLESS</strong>.
                      </li>
                      <li>
                        <strong className="text-white">Обновите ключ</strong><br />
                        После смены протокола скопируйте обновленный ключ из поля <strong>KEY</strong>. Откройте приложение <strong>Happ</strong>, нажмите значок <strong className="text-white">+</strong> (Add) и выберите <strong>Add from Clipboard</strong> для вставки ключа.
                      </li>
                    </ol>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/50">
                    <p className="font-semibold text-zinc-100 text-base mb-2">Запуск:</p>
                    <ul className="list-disc ml-5 space-y-2 text-zinc-300">
                      <li>Выберите добавленный сервер в списке.</li>
                      <li>Переключите главный тумблер в положение <strong>«On»</strong>.</li>
                      <li>При первом запуске iOS может запросить разрешение на добавление конфигурации VPN — нажмите <strong>«Разрешить»</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Option B: OS Update */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
                Вариант Б: Обновление iOS (рекомендуется)
              </h3>
              <div className="text-sm text-zinc-400 leading-relaxed">
                <p className="mb-4">Часто проблемы с подключением решаются простым обновлением операционной системы до последней актуальной версии.</p>
                
                <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl space-y-4">
                  <p className="text-zinc-300">
                    Обновить прошивку на iPhone можно по Wi-Fi, перейдя в <strong className="text-white text-xs px-2 py-1 bg-zinc-800 rounded">Настройки &gt; Основные &gt; Обновление ПО</strong>.
                  </p>
                  <div className="space-y-2 text-zinc-400 text-xs border-l-2 border-amber-500/50 pl-4 py-1 bg-amber-500/5">
                    <p>• Перед обновлением обязательно создайте резервную копию через iCloud или компьютер.</p>
                    <p>• Убедитесь, что заряд батареи выше 50%, а устройство подключено к стабильной сети Wi-Fi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Android Solution */}
        <section className="border-t border-zinc-900 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 shrink-0">
              <span className="text-sm font-mono text-white">And</span>
            </div>
            <h2 className="text-xl font-medium text-white">2. Решение для Android</h2>
          </div>

          <div className="pl-14 space-y-6">
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>Если основное приложение работает нестабильно, рекомендуется временно использовать проверенную предыдущую версию.</p>
              
              <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl space-y-6">
                <div>
                  <p className="font-semibold text-zinc-100 text-base mb-2">Установочный файл:</p>
                  <p>Старый билд (APK): <a href="https://cloud.mail.ru/public/28tH/cMhabjYyi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Скачать с Mail.ru Cloud</a></p>
                </div>

                <div className="pt-4 border-t border-zinc-800/50">
                  <p className="font-semibold text-zinc-100 text-base mb-2">Установка:</p>
                  <p className="text-zinc-300">Удалите текущую версию приложения и установите скачанный файл APK.</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/50">
                  <p className="font-semibold text-zinc-100 text-base mb-2">Проверка:</p>
                  <p className="text-zinc-300">Запустите VPN и попробуйте открыть Telegram.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 bg-zinc-800/40 border border-zinc-800 rounded-xl p-8">
          <p className="text-zinc-400 text-sm italic text-center leading-relaxed">
            NB! Мы не призываем пользоваться данной инструкцией — соблюдайте законы РФ.
          </p>
        </div>

      </div>
    </div>
  );
}
