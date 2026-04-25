import { Monitor, Apple, Smartphone, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

export type LocalizedString = {
  ru: string;
  en: string;
};

export type Step = {
  title: LocalizedString;
  text?: LocalizedString;
  code?: string;
  link?: string;
  linkText?: LocalizedString;
  internalLink?: {
    url: string;
    text: LocalizedString;
  };
};

export type Guide = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  warning?: LocalizedString;
  steps: Step[];
};

export type Category = {
  slug: string;
  name: string;
  icon: any; // LucideIcon
  guides: Guide[];
};

const getTelegramGuide = (platformName: string): Guide => ({
  slug: 'telegram-not-working',
  title: { ru: 'Не работает Telegram', en: 'Telegram is not working' },
  description: { 
    ru: 'Что делать, если при включенном VPN не загружается Telegram.', 
    en: 'What to do if Telegram doesn\'t load when VPN is connected.' 
  },
  steps: [
    {
      title: { ru: 'Проверьте прокси', en: 'Check proxies' },
      text: { ru: 'Проверьте, что в самом Telegram отключены все прокси.', en: 'Check that all proxies are disabled in Telegram settings.' }
    },
    {
      title: { ru: 'Отключите VPN для приложений', en: 'Disable per-app VPN' },
      text: { 
        ru: `В ${platformName}-клиенте отключите функцию VPN для отдельных приложений. Эта функция экспериментальная и работает не на всех устройствах.`, 
        en: `In the ${platformName} client, disable the per-app VPN routing. This feature is experimental and may not work correctly on all devices.` 
      }
    },
    {
      title: { ru: 'Обновите базы (geoIP / geoSite)', en: 'Update geoIP & geoSite' },
      text: { ru: 'Перейдите в меню (три полоски в приложении BlackTemple справа сверху), откройте "Настройки", нажмите "Обновить geoIP и geoSite". После этого перезагрузите устройство и проверьте.', en: 'Go to the menu (three lines in the BlackTemple app on the top right), select Settings, and click update geoIP and geoSite. Then restart your device and test.' }
    },
    {
      title: { ru: 'Переустановите Telegram', en: 'Reinstall Telegram' },
      text: { ru: 'Если ничего не помогло — полностью переустановите приложение Telegram.', en: 'If nothing helped, completely reinstall the Telegram application.' }
    },
    {
      title: { ru: 'Для пользователей Telegram Web', en: 'For Telegram Web users' },
      text: { ru: 'Если используете веб-версию, протестируйте обе доступные версии (web.telegram.org/k/ и web.telegram.org/a/).', en: 'If using the web version, test both available versions (web.telegram.org/k/ and web.telegram.org/a/).' }
    }
  ]
});

const getFindKeyGuide = (): Guide => ({
  slug: 'find-key',
  title: { ru: 'Как найти ваш ключ (KEY)', en: 'How to find your key (KEY)' },
  description: { 
    ru: 'Если вы уже зарегистрированы и у вас добавлено устройство, ваш ключ всегда доступен в личном кабинете.', 
    en: 'If you are registered and have added a device, your key is always available in your dashboard.' 
  },
  warning: {
    ru: 'Никогда не передавайте ваш KEY третьим лицам. Этот ключ — ваш личный доступ к защищенному соединению.',
    en: 'Never share your KEY with third parties. This key is your personal access to an encrypted connection.'
  },
  steps: [
    {
      title: { ru: 'Зайдите в личный кабинет', en: 'Log in to your dashboard' },
      text: { 
        ru: 'Перейдите на сайт [blacktemple.online](https://blacktemple.online) или откройте Telegram-бота [@blacktemple_space_bot](https://t.me/blacktemple_space_bot). Используйте тот сервис, через который вы пополняли баланс.', 
        en: 'Go to the website [blacktemple.online](https://blacktemple.online) or open the Telegram bot [@blacktemple_space_bot](https://t.me/blacktemple_space_bot). Use the service where you added funds.' 
      }
    },
    {
      title: { ru: 'Найдите раздел «Устройства»', en: 'Find the "Devices" section' },
      text: { 
        ru: 'На главной странице личного кабинета пролистайте вниз до вкладки «Устройства».', 
        en: 'On the main page of your dashboard, scroll down to the "Devices" tab.' 
      }
    },
    {
      title: { ru: 'Выберите нужное устройство', en: 'Select the desired device' },
      text: { 
        ru: 'Нажмите на название устройства (по умолчанию оно называется «Основной», если у вас их несколько — выберите нужное).', 
        en: 'Click on the name of the device (by default, it is called "Main"; if you have several, select the one you need).' 
      }
    },
    {
      title: { ru: 'Скопируйте ключ (KEY)', en: 'Copy the key (KEY)' },
      text: { 
        ru: 'В открывшейся карточке устройства найдите поле с пометкой KEY. Нажмите на сам ключ или на иконку копирования рядом с ним.\n\nТеперь этот ключ можно вставлять в ваше VPN-приложение.', 
        en: 'In the opened device card, find the field marked KEY. Click on the key itself or the copy icon next to it.\n\nNow you can paste this key into your VPN application.' 
      }
    }
  ]
});

const getAddDeviceGuide = (): Guide => ({
  slug: 'add-device',
  title: { ru: 'Как добавить второе устройство', en: 'How to add a second device' },
  description: { 
    ru: 'В BlackTemple VPN действует правило: один ключ = одно устройство. Каждое дополнительное устройство оплачивается отдельно согласно выбранному тарифу.', 
    en: 'BlackTemple VPN follows the rule: one key = one device. Each additional device is paid separately according to the selected plan.' 
  },
  warning: {
    ru: 'Каждое новое устройство требует отдельной оплаты/подписки в соответствии с тарифом.',
    en: 'Each new device requires separate payment/subscription according to your plan.'
  },
  steps: [
    {
      title: { ru: 'Зайдите в личный кабинет', en: 'Log in to your dashboard' },
      text: { 
        ru: 'Через сайт: [blacktemple.online](https://blacktemple.online)\nИли через Telegram-бота: [@blacktemple_space_bot](https://t.me/blacktemple_space_bot)', 
        en: 'Via website: [blacktemple.online](https://blacktemple.online)\nOr via Telegram bot: [@blacktemple_space_bot](https://t.me/blacktemple_space_bot)' 
      }
    },
    {
      title: { ru: 'Перейдите в раздел управления', en: 'Go to the management section' },
      text: { 
        ru: 'Если вы в боте: нажмите кнопку «Баланс» или «Личный кабинет».\nНайдите блок (или кнопку) «Устройства».', 
        en: 'If in the bot: click the "Balance" or "Dashboard" button.\nFind the "Devices" block (or button).' 
      }
    },
    {
      title: { ru: 'Добавьте устройство', en: 'Add a device' },
      text: { 
        ru: 'Нажмите на иконку «+» (Плюс) рядом со списком устройств.\nДалее сайт создаст вам устройство и выдаст ключ под него.', 
        en: 'Click on the "+" (Plus) icon next to the list of devices.\nThe site will then create a device for you and issue a key for it.' 
      }
    }
  ]
});

const getWhatsAppGuide = (): Guide => ({
  slug: 'whatsapp-lag',
  title: { ru: 'WhatsApp без лагов', en: 'WhatsApp without lags' },
  description: {
    ru: 'Что делать, если WhatsApp тормозит или сообщения приходят с задержкой при включенном VPN.',
    en: 'What to do if WhatsApp lags or messages are delayed with VPN on.'
  },
  steps: [
    {
      title: { ru: 'Включите VPN', en: 'Enable VPN' },
      text: { ru: 'Включите VPN (рекомендуем протокол VLESS в приложении v2RayTun или Happ).', en: 'Enable VPN (we recommend the VLESS protocol in the v2RayTun or Happ app).' }
    },
    {
      title: { ru: 'Откройте Настройки', en: 'Open Settings' },
      text: { ru: 'Зайдите в Настройки вашего телефона и найдите в списке приложений WhatsApp.', en: 'Go to your phone\'s Settings and find WhatsApp in the list of applications.' }
    },
    {
      title: { ru: 'Отключите геолокацию', en: 'Disable location services' },
      text: { ru: 'В разделе разрешений отключите службу геолокации (Местоположение — Никогда).', en: 'In the permissions section, disable location services (Location — Never).' }
    },
    {
      title: { ru: 'Перезапустите WhatsApp', en: 'Restart WhatsApp' },
      text: { ru: 'Полностью закройте и перезапустите WhatsApp.', en: 'Completely close and restart WhatsApp.' }
    }
  ]
});

const getTikTokIosGuide = (): Guide => ({
  slug: 'tiktok-new',
  title: { ru: 'Не работает тикток с впн', en: 'TikTok is not working with VPN' },
  description: {
    ru: 'Как смотреть свежий контент и выкладывать видео в TikTok на iPhone.',
    en: 'How to watch fresh content and upload videos on TikTok for iPhone.'
  },
  steps: [
    {
      title: { ru: 'Удалите TikTok', en: 'Delete TikTok' },
      text: { ru: 'Удалите текущее приложение TikTok с телефона.', en: 'Delete the current TikTok app from your phone.' }
    },
    {
      title: { ru: 'Измените регион', en: 'Change region' },
      text: { ru: 'Зайдите в Настройки -> Основные -> Язык и регион. Измените регион на Казахстан или Беларусь.', en: 'Go to Settings -> General -> Language & Region. Change the region to Kazakhstan or Belarus.' }
    },
    {
      title: { ru: 'Включите VPN и установите TikTok', en: 'Turn on VPN and install TikTok' },
      text: { ru: 'Включите VPN, зайдите в App Store и заново установите TikTok. После этого новые ролики станут доступны.', en: 'Turn on VPN, go to the App Store, and reinstall TikTok. After this, new videos will become available.' }
    }
  ]
});

const getTikTokAndroidGuide = (): Guide => ({
  slug: 'tiktok-new',
  title: { ru: 'Не работает тикток с впн', en: 'TikTok is not working with VPN' },
  description: {
    ru: 'Как смотреть свежий контент в TikTok на Android (потребуется специальная версия).',
    en: 'How to watch fresh content on TikTok for Android (requires a special version).'
  },
  steps: [
    {
      title: { ru: 'Удалите TikTok', en: 'Delete TikTok' },
      text: { ru: 'Удалите оригинальное приложение TikTok.', en: 'Delete the original TikTok application.' }
    },
    {
      title: { ru: 'Скачайте APK-файл', en: 'Download APK file' },
      text: { ru: 'Скачайте специальную версию приложения по ссылке ниже.', en: 'Download the special version of the app from the link below.' },
      link: 'https://disk.yandex.ru/d/eA6tLScW4PGbKA',
      linkText: { ru: 'Скачать TikTok (Яндекс.Диск)', en: 'Download TikTok (Yandex.Disk)' }
    },
    {
      title: { ru: 'Установите приложение', en: 'Install the app' },
      text: { ru: 'Установите скачанный файл (разрешите установку из неизвестных источников, если телефон попросит).', en: 'Install the downloaded file (allow installation from unknown sources if prompted).' }
    },
    {
      title: { ru: 'Запустите с VPN', en: 'Launch with VPN' },
      text: { ru: 'Запустите приложение с включенным VPN.', en: 'Launch the application with the VPN turned on.' }
    }
  ]
});

const getVpnDisconnectIosGuide = (): Guide => ({
  slug: 'vpn-disconnect',
  title: { ru: 'VPN отключается спустя время', en: 'VPN disconnects after a while' },
  description: {
    ru: 'Что делать, если соединение Wi-Fi или LTE может «заикаться» или перезагружаться на iPhone.',
    en: 'What to do if your Wi-Fi or LTE connection stutters or resets on your iPhone.'
  },
  warning: {
    ru: 'Это не проблема сети BLACKTEMPLE, а системная проблема iOS. Сброс настроек сети удалит пароли от ваших сохраненных Wi-Fi сетей.',
    en: 'This is not a BLACKTEMPLE network issue, but an iOS system bug. Resetting network settings will delete passwords for your saved Wi-Fi networks.'
  },
  steps: [
    {
      title: { ru: 'Примените сброс настроек сети', en: 'Reset network settings' },
      text: { 
        ru: 'Зайдите в Настройки телефона. Выберите Основные → Перенос или сброс iPhone. Нажмите Сбросить → Сбросить настройки сети.', 
        en: 'Go to your phone\'s Settings. Select General → Transfer or Reset iPhone. Tap Reset → Reset Network Settings.' 
      }
    },
    {
      title: { ru: 'Измените URL для проверки (если сброс не помог)', en: 'Change Speed Test URL (if reset didn\'t help)' },
      text: { 
        ru: 'Откройте приложение BlackTemple. Нажмите на меню (три полоски в правом верхнем углу). Перейдите в раздел Настройки → Сложные настройки. Найдите пункт URL для проверки задержки. Выберите любой другой URL из списка. Перезагрузите телефон.', 
        en: 'Open the BlackTemple app. Tap the menu (three lines in the top right corner). Go to Settings → Advanced Settings. Find Speed Test URL. Select any other URL from the list. Restart your phone.' 
      }
    }
  ]
});

const getVpnDisconnectAndroidGuide = (): Guide => ({
  slug: 'vpn-disconnect',
  title: { ru: 'VPN отключается спустя время', en: 'VPN disconnects after a while' },
  description: {
    ru: 'Решение проблемы, если VPN-соединение периодически обрывается.',
    en: 'Solution for when the VPN connection periodically drops.'
  },
  steps: [
    {
      title: { ru: 'Измените URL проверки задержки', en: 'Change Speed Test URL' },
      text: { 
        ru: 'Откройте приложение BlackTemple. Нажмите на меню (три полоски в правом верхнем углу). Перейдите в раздел Настройки → Сложные настройки. Найдите пункт URL для проверки задержки. Выберите любой другой URL из списка. Перезагрузите телефон и попробуйте подключиться снова.', 
        en: 'Open the BlackTemple app. Tap the menu (three lines in the top right corner). Go to Settings → Advanced Settings. Find Speed Test URL. Select any other URL from the list. Restart your phone and try connecting again.' 
      }
    }
  ]
});

const getDifferentBalanceGuide = (): Guide => ({
  slug: 'different-balance',
  title: { ru: 'Почему баланс в боте и на сайте отличается?', en: 'Why do the bot and website balances differ?' },
  description: {
    ru: 'Если вы пополнили счет, но не видите денег в приложении или на сайте, важно знать: аккаунты в Telegram-боте и на сайте — это две разные учетные записи.',
    en: 'If you added funds but don\'t see the money in the app or on the website, it\'s important to know: accounts in the Telegram bot and on the website are two different accounts.'
  },
  steps: [
    {
      title: { ru: 'Как это работает?', en: 'How it works?' },
      text: { 
        ru: '• Аккаунт в боте ([@blacktemple_space_bot](https://t.me/blacktemple_space_bot)) создается автоматически через ваш профиль Telegram.\n• Аккаунт на сайте ([blacktemple.online](https://blacktemple.online)) создается отдельно через почту или логин, если вы регистрировались там вручную.\n• Они не связаны между собой: у каждого из них свой отдельный баланс, свои ключи и свои настройки.', 
        en: '• The bot account ([@blacktemple_space_bot](https://t.me/blacktemple_space_bot)) is created automatically via your Telegram profile.\n• The website account ([blacktemple.online](https://blacktemple.online)) is created separately via email or login if you registered there manually.\n• They are not connected: each has its own separate balance, keys, and settings.' 
      }
    },
    {
      title: { ru: 'Типичные ситуации', en: 'Typical situations' },
      text: { 
        ru: '• Вы пополнили баланс через сайт, но зашли в приложение через данные бота — там будет 0.\n• Вы привыкли пользоваться ботом, но решили зайти на сайт и создали там «пустой» личный кабинет — баланса из бота там не будет.', 
        en: '• You added funds via the website, but logged into the app using bot credentials — it will show 0.\n• You are used to using the bot, but decided to go to the website and created an "empty" dashboard there — the bot\'s balance won\'t be there.' 
      }
    },
    {
      title: { ru: 'Как избежать путаницы?', en: 'How to avoid confusion?' },
      text: { 
        ru: 'Выберите один способ: Пользуйтесь либо только ботом, либо только сайтом для оплаты и управления.\n\nЕсли нужен доступ с сайта к аккаунту бота: Не регистрируйте новый аккаунт на сайте! Вместо этого введите в боте команду `/more`, получите логин/пароль и войдите на сайт под этими данными. Тогда баланс будет общим.', 
        en: 'Choose one method: Use either only the bot or only the website for payment and management.\n\nIf you need access from the website to the bot account: Do not register a new account on the website! Instead, enter the `/more` command in the bot, get the login/password, and log into the website with these credentials. Then the balance will be shared.' 
      }
    }
  ]
});

const getBotProblemsGuide = (): Guide => ({
  slug: 'bot-problems',
  title: { ru: 'Проблемы с личным кабинетом в боте Telegram?', en: 'Problems with the dashboard in the Telegram bot?' },
  description: {
    ru: 'Если Telegram-бот временно недоступен или вам удобнее управлять устройствами через браузер, вы можете войти в свой аккаунт на нашем сайте.',
    en: 'If the Telegram bot is temporarily unavailable or you prefer to manage devices via the browser, you can log in to your account on our website.'
  },
  steps: [
    {
      title: { ru: 'Получите данные для входа', en: 'Get login credentials' },
      text: { 
        ru: 'Откройте нашего бота [@blacktemple_space_bot](https://t.me/blacktemple_space_bot) и пропишите команду: `/more`', 
        en: 'Open our bot [@blacktemple_space_bot](https://t.me/blacktemple_space_bot) and type the command: `/more`' 
      }
    },
    {
      title: { ru: 'Сохраните логин и пароль', en: 'Save login and password' },
      text: { 
        ru: 'Бот моментально выдаст вам уникальный логин и пароль от вашего аккаунта.', 
        en: 'The bot will instantly give you a unique login and password for your account.' 
      }
    },
    {
      title: { ru: 'Войдите на сайт', en: 'Log in to the website' },
      text: { 
        ru: 'Перейдите на [blacktemple.online](https://blacktemple.online) и введите полученные данные.', 
        en: 'Go to [blacktemple.online](https://blacktemple.online) and enter the provided credentials.' 
      }
    },
    {
      title: { ru: 'Пользуйтесь без Telegram', en: 'Use without Telegram' },
      text: { 
        ru: 'В личном кабинете на сайте вы сможете копировать ключи, менять тарифы и пополнять баланс, даже не открывая мессенджер.', 
        en: 'In the dashboard on the website, you can copy keys, change plans, and add funds without even opening the messenger.' 
      }
    }
  ]
});

const getTorrentBanGuide = (): Guide => ({
  slug: 'torrent-ban',
  title: { ru: 'VPN отключился на 10 минут (Торренты)', en: 'VPN disconnected for 10 minutes (Torrents)' },
  description: {
    ru: 'Если ваше соединение внезапно прервалось, а в приложении или боте статус сменился на временную блокировку — это произошло из-за использования BitTorrent-трафика.',
    en: 'If your connection suddenly dropped and the app or bot shows a temporary ban, it happened due to BitTorrent traffic.'
  },
  warning: {
    ru: 'На европейских серверах действуют строгие правила регуляторов относительно обмена файлами через торренты. Наша система автоматически приостанавливает доступ на 10 минут при обнаружении такого трафика.',
    en: 'European servers have strict regulator rules regarding file sharing via torrents. Our system automatically suspends access for 10 minutes when such traffic is detected.'
  },
  steps: [
    {
      title: { ru: 'Закройте торрент-клиенты', en: 'Close torrent clients' },
      text: { 
        ru: 'Убедитесь, что программы вроде Vkplay, uTorrent, BitTorrent или qBittorrent полностью закрыты (проверьте системный трей рядом с часами). Даже если вы ничего не качаете, программа в фоновом режиме обменивается файлами с другими пользователями.', 
        en: 'Ensure programs like Vkplay, uTorrent, BitTorrent, or qBittorrent are completely closed (check the system tray next to the clock). Even if you are not downloading anything, the program shares files with other users in the background.' 
      }
    },
    {
      title: { ru: 'Смените локацию', en: 'Change location' },
      text: { 
        ru: 'Переключите в приложении страну на Россия. На российских серверах эти ограничения не действуют.', 
        en: 'Switch the country to Russia in the app. These restrictions do not apply on Russian servers.' 
      }
    },
    {
      title: { ru: 'Отключите VPN на время загрузки', en: 'Disable VPN during download' },
      text: { 
        ru: 'Если вам нужно скачать большой объем данных через торрент, лучше временно отключить VPN.', 
        en: 'If you need to download a large amount of data via torrent, it is better to temporarily disable the VPN.' 
      }
    }
  ]
});

const getSlowSitesGuide = (platform: string): Guide => {
  const steps: Step[] = [];
  const isAndroid = platform === 'Android';

  if (!isAndroid) {
    steps.push({
      title: { ru: 'Обновление баз GeoIP и GeoSite', en: 'Update GeoIP and GeoSite' },
      text: { 
        ru: 'Иногда встроенные списки маршрутизации устаревают, и приложение не понимает, какой трафик направлять в VPN.\n\nОткройте приложение BlackTemple. Перейдите в Меню (три полоски в правом верхнем углу). Зайдите в Настройки. Нажмите кнопки «Обновить GeoIP» и «Обновить GeoSite». Перезагрузите ваше устройство и проверьте работу.', 
        en: 'Sometimes built-in routing lists get outdated. Open the app, go to Menu -> Settings, click "Update GeoIP" and "Update GeoSite". Restart your device.' 
      }
    });
  }

  steps.push({
    title: { ru: 'Обновление конфигурации ключа', en: 'Update key configuration' },
    text: { 
      ru: isAndroid ? 'В приложении зайдите в раздел «Мои ключи и подключения». Найдите активный ключ и нажмите на кнопку обновления (иконка с двумя зелеными стрелочками, идущими по кругу). Дождитесь завершения синхронизации и попробуйте подключиться снова.' : 'Если первый шаг не помог, возможно, изменились настройки на стороне сервера.\n\nВ приложении зайдите в раздел «Мои ключи и подключения». Найдите активный ключ и нажмите на кнопку обновления (иконка с двумя зелеными стрелочками, идущими по кругу). Дождитесь завершения синхронизации и попробуйте подключиться снова.', 
      en: isAndroid ? 'In the app, go to "My keys and connections". Find the active key and click the update button (icon with two green arrows). Wait for sync and try connecting again.' : 'If the first step did not help, perhaps the server settings have changed.\n\nIn the app, go to "My keys and connections". Find the active key and click the update button (icon with two green arrows). Wait for sync and try connecting again.' 
    }
  });

  steps.push({
    title: { ru: 'Обход «белых списков» оператора', en: 'Bypass ISP whitelists' },
    text: { 
      ru: 'Если интернет всё равно тормозит, возможно, ваш провайдер ввел жесткие ограничения на трафик.\n\nВключите функцию White List в настройках приложения для обхода этих ограничений.', 
      en: 'Enable the White List feature in the app settings to bypass these restrictions.' 
    }
  });

  steps.push({
    title: { ru: 'Отключите VPN для приложений', en: 'Disable per-app VPN' },
    text: { 
      ru: `В ${platform}-клиенте отключите функцию VPN для отдельных приложений. Эта функция экспериментальная и работает не на всех устройствах.`, 
      en: `In the ${platform} client, disable the per-app VPN routing. This feature is experimental and may not work correctly on all devices.` 
    }
  });

  return {
    slug: 'slow-sites',
    title: { ru: 'Не работают сайты и сервисы с впн но сам впн подключен', en: 'Sites and services are not working but VPN is connected' },
    description: { 
      ru: 'Что делать, если при включенном VPN медленно загружаются сайты.', 
      en: 'What to do if sites load slowly with VPN connected.' 
    },
    warning: { 
      ru: 'Важно: Данная функция (White List) доступна только на тарифе BlackRock (от 4,5 руб/сутки). На базовом тарифе BlackEasy эта функция не поддерживается.', 
      en: 'Important: The White List feature is only available on the BlackRock plan. It is not supported on the basic BlackEasy plan.' 
    },
    steps
  };
};

const getChangePlanGuide = (): Guide => ({
  slug: 'change-plan',
  title: { ru: 'Как сменить тарифный план', en: 'How to change the pricing plan' },
  description: { 
    ru: 'Вы можете изменить тариф для любого своего устройства в любой момент.', 
    en: 'You can change the pricing plan for any of your devices at any time.' 
  },
  steps: [
    {
      title: { ru: 'Войдите в личный кабинет', en: 'Log in to your dashboard' },
      text: { 
        ru: 'Перейдите на сайт [blacktemple.online](https://blacktemple.online) или откройте Telegram-бота [@blacktemple_space_bot](https://t.me/blacktemple_space_bot).\n\nВажно: Заходите через ту платформу, где вы обычно пополняете баланс.', 
        en: 'Go to the website [blacktemple.online](https://blacktemple.online) or open the Telegram bot [@blacktemple_space_bot](https://t.me/blacktemple_space_bot).\n\nImportant: Log in using the platform where you usually add funds.' 
      }
    },
    {
      title: { ru: 'Найдите раздел «Устройства»', en: 'Find the "Devices" section' },
      text: { 
        ru: 'Пролистайте главную страницу вниз до списка ваших устройств.', 
        en: 'Scroll down the main page to the list of your devices.' 
      }
    },
    {
      title: { ru: 'Выберите нужное устройство', en: 'Select the desired device' },
      text: { 
        ru: 'Нажмите на название устройства, на котором хотите сменить тариф (например, «Основной»).', 
        en: 'Click on the name of the device for which you want to change the plan (e.g., "Main").' 
      }
    },
    {
      title: { ru: 'Смените тариф', en: 'Change the plan' },
      text: { 
        ru: 'В открывшемся меню найдите текущий тариф.\nВыберите новый тарифный план из списка доступных.\nПодтвердите изменения.', 
        en: 'In the menu, find your current plan.\nSelect a new pricing plan from the list of available ones.\nConfirm the changes.' 
      }
    }
  ]
});

const getInternetProblemsGuide = (): Guide => ({
  slug: 'internet-problems',
  title: { ru: 'Работает только Wi-Fi / Не работает мобильная связь / Пропадает ночью', en: 'Works only on Wi-Fi / Mobile data doesn\'t work / Drops at night' },
  description: {
    ru: 'Что делать, если через Wi-Fi всё работает, а на мобильном интернете — нет, или если связь стабильно обрывается в ночное время.',
    en: 'What to do if everything works via Wi-Fi, but not on mobile data, or if the connection consistently drops at night.'
  },
  warning: {
    ru: 'Это означает, что ваш оператор ввел «белые списки» (разрешает доступ только к определенным ресурсам, блокируя всё остальное).',
    en: 'This means your operator has introduced "whitelists" (allowing access only to specific resources while blocking everything else).'
  },
  steps: [
    {
      title: { ru: 'Шаг 1: Использование функции White List', en: 'Step 1: Using the White List function' },
      text: { 
        ru: 'В нашем приложении есть специальный инструмент для обхода таких ограничений.\n\n1. Зайдите в Настройки приложения BlackTemple.\n2. Найдите и включите функцию White List.\n3. Попробуйте переподключиться.\n\n**Важно:** Данная функция — это продвинутая технология обхода, которая доступна только на тарифе BlackRock (от 4,5 руб/сутки). На базовом тарифе BlackEasy эта функция не поддерживается.', 
        en: 'Our app has a special tool to bypass such restrictions.\n\n1. Go to the BlackTemple app Settings.\n2. Find and enable the White List function.\n3. Try to reconnect.\n\n**Important:** This function is an advanced bypass technology available only on the BlackRock plan (from 4.5 rubles/day). This function is not supported on the basic BlackEasy plan.' 
      }
    },
    {
      title: { ru: 'Шаг 2: Если White List не помог', en: 'Step 2: If White List didn\'t help' },
      text: { 
        ru: 'Если даже с включенной функцией интернет не появился, значит, в вашем конкретном регионе операторы применили экспериментальные методы блокировки, которые на данный момент обходят существующие решения.\n\n**Что делать?**\nК сожалению, в данный момент в вашем регионе наши стандартные методы могут не работать.\n\nМы не стоим на месте: наши инженеры обновляют протоколы каждый день. Мы уже разрабатываем новый метод специально для таких сложных зон и выпустим его в ближайшем обновлении.', 
        en: 'If the internet hasn\'t come back even with this function enabled, it means that operators in your specific region have applied experimental blocking methods that currently bypass existing solutions.\n\n**What to do?**\nUnfortunately, at the moment our standard methods may not work in your region.\n\nWe are not sitting still: our engineers update the protocols every day. We are already developing a new method specifically for such complex zones and will release it in the next update.' 
      }
    }
  ]
});

const getKeyErrorGuide = (platform: string): Guide => {
  const happStore = platform === 'Windows' 
    ? '[happ.ru.uptodown.com/windows/dw](https://happ.ru.uptodown.com/windows/dw)' 
    : platform === 'macOS' 
      ? 'Mac App Store' 
      : platform === 'iOS' 
        ? 'App Store' 
        : 'Google Play';

  return {
    slug: 'key-connection-error',
    title: { ru: '❌ Ключ не подключается или пишет «Подписка удалена»', en: '❌ Key does not connect or says "Subscription deleted"' },
    description: {
      ru: 'Если при добавлении ключа вы видите ошибку «Подписка не содержит активных ключей» или соединение просто не устанавливается, выполните следующие шаги:',
      en: 'If when adding a key you see the error "Subscription contains no active keys" or the connection simple fails to establish, follow these steps:'
    },
    steps: [
      {
        title: { ru: 'Способ 1: Базовые действия', en: 'Method 1: Basic actions' },
        text: { 
          ru: '• **Перезагрузите устройство.** Это сбросит сетевые ошибки системы.', 
          en: '• **Restart the device.** This will reset system network errors.' 
        }
      },
      {
        title: { ru: 'Способ 2: Попробуйте другой способ добавления ключа', en: 'Method 2: Try another way to add the key' },
        text: { 
          ru: 'Иногда обычная вставка текста срабатывает некорректно. Попробуйте альтернативы:\n\n• **Через ссылку:** Наш ключ — это кликабельная ссылка. Просто нажмите на него в Telegram-боте, и он должен автоматически открыться в приложении BlackTemple.\n• **Через «Плюс»:** Скопируйте ключ, зайдите в раздел «Мои ключи», нажмите на «+» в правом верхнем углу и выберите «Добавить из буфера обмена».', 
          en: 'Sometimes standard text pasting does not work correctly. Try alternatives:\n\n• **Via link:** Our key is a clickable link. Just tap on it in the Telegram bot, and it should automatically open in the BlackTemple app.\n• **Via "Plus":** Copy the key, go to the "My keys" section, tap on the "+" in the top right corner and select "Add from clipboard".' 
        }
      },
      {
        title: { ru: 'Способ 3: Переход на альтернативный клиент (Happ)', en: 'Method 3: Switching to alternative client (Happ)' },
        text: { 
          ru: `Если официальное приложение BlackTemple всё равно выдает ошибку, воспользуйтесь универсальным клиентом Happ. Он работает на более гибких движках.\n\n**Скачайте Happ:**\nНайдите приложение Happ в ${happStore}.\n\n**Настройте протокол:**\nВ приложении Happ выберите протокол VLESS. Ознакомьтесь с инструкцией ниже.\n\n**Обновите ключ:**\nСкопируйте новый ключ из бота или личного кабинета и вставьте его в Happ.`, 
          en: `If the official BlackTemple app still throws an error, use the universal Happ client. It works on more flexible engines.\n\n**Download Happ:**\nFind the Happ app in ${happStore}.\n\n**Configure protocol:**\nIn the Happ app, select the VLESS protocol. Check the guide below.\n\n**Update the key:**\nCopy the new key from the bot or dashboard and paste it into Happ.` 
        },
        internalLink: {
          url: '/linux/vless-protocol',
          text: { ru: 'Как сменить протокол на VLESS?', en: 'How to change protocol to VLESS?' }
        }
      }
    ]
  };
};

const getConnectionErrorGuide = (platform: 'windows' | 'mobile' | 'other'): Guide => {
  const steps: Step[] = [];

  if (platform === 'windows') {
    steps.push({
      title: { ru: 'Перезагрузите компьютер', en: 'Restart your computer' },
      text: { 
        ru: 'Нажмите на кнопку «Пуск» (логотип Windows в левом нижнем углу), выберите «Выключение» — «Перезагрузка».\n\nВажно: именно «Перезагрузка», а не «Завершение работы», так как в Windows 10/11 обычное выключение часто сохраняет ошибки сессии в памяти.', 
        en: 'Click on the "Start" button (Windows logo in the lower left corner), select "Power" - "Restart".\n\nImportant: choose "Restart", not "Shut down", as normal shutdown in Windows 10/11 often saves session errors in memory.' 
      }
    });
  } else if (platform === 'mobile') {
    steps.push({
      title: { ru: 'Перезагрузите устройство', en: 'Restart your device' },
      text: { 
        ru: 'Просто зажмите кнопку питания и выберите «Перезагрузка». Это сбросит зависшие процессы сетевого стека и очистит кэш системы.', 
        en: 'Simply hold the power button and select "Restart". This will reset hung network stack processes and clear the system cache.' 
      }
    });
  } else {
    // other platform
    steps.push({
      title: { ru: 'Перезагрузите устройство', en: 'Restart your device' },
      text: { 
        ru: 'Выполните полную перезагрузку вашего устройства. Это сбросит зависшие процессы сетевого стека и очистит кэш системы.', 
        en: 'Perform a full restart of your device. This will reset hung network stack processes and clear the system cache.' 
      }
    });
  }

  steps.push({
    title: { ru: 'Шаг 2: Использование функции White List', en: 'Step 2: Using the White List function' },
    text: {
      ru: 'В нашем приложении есть специальный инструмент для обхода таких ограничений.\n\n1. Зайдите в приложение BlackTemple.\n2. Найдите и включите функцию White List.\n3. Попробуйте переподключиться.\n\n**Важно:** Данная функция — это продвинутая технология обхода, которая доступна только на тарифе BlackRock (от 4,5 руб/сутки). На базовом тарифе BlackEasy эта функция не поддерживается.',
      en: 'Our app has a special tool to bypass such restrictions.\n\n1. Go to the BlackTemple app.\n2. Find and enable the White List function.\n3. Try to reconnect.\n\n**Important:** This function is an advanced bypass technology available only on the BlackRock plan (from 4.5 rubles/day). This function is not supported on the basic BlackEasy plan.'
    }
  });

  return {
    slug: 'connection-error',
    title: { ru: 'Что делать, если VPN не подключается?', en: 'What to do if the VPN does not connect?' },
    description: { 
      ru: 'Если приложение выдает ошибку или бесконечно крутит индикатор подключения, первым делом выполните полную перезагрузку сетевых интерфейсов вашего устройства.', 
      en: 'If the app returns an error or endlessly spins the connection indicator, the first thing to do is completely restart your device\'s network interfaces.' 
    },
    steps
  };
};

const getRuSitesGuide = (): Guide => ({
  slug: 'ru-sites',
  title: { ru: 'Что делать, если не открываются российские сайты и приложения?', en: 'Russian sites and apps do not open' },
  description: {
    ru: 'Если при включенном VPN не работают банки, Госуслуги или другие российские сервисы, используйте один из двух способов.',
    en: 'If banks, Gosuslugi, or other Russian services do not work with VPN connected, use one of the two methods.'
  },
  warning: {
    ru: 'Важно: VPN для отдельных приложений может работать некорректно на некоторых моделях устройств. Если вы выбрали приложения, но VPN в них не заработал придется выключать vpn по кнопке для работы с ru платформами.',
    en: 'Important: Per-app VPN may not work correctly on some device models. If you selected apps but VPN didn\'t work in them, you will have to turn off the VPN using the button to work with RU platforms.'
  },
  steps: [
    {
      title: { ru: 'Способ 1: Смена региона в приложении (Рекомендуемый)', en: 'Method 1: Change region in the app (Recommended)' },
      text: {
        ru: 'Это самый простой способ. Приложение само поймет, какой трафик является российским, и пустит его в обход VPN.\n\nВ приложении нажмите на 3 полоски (меню) в верхнем углу.\nПерейдите в Настройки.\nНайдите пункт «Страна использования» и выберите Россия.\nПосле этого российские сайты начнут открываться напрямую.',
        en: 'This is the easiest way. The app will understand what traffic is Russian and bypass the VPN.\n\nIn the app, click the 3 lines (menu) in the top corner.\nGo to Settings.\nFind "Country of Use" and select Russia.\nAfter that, Russian sites will open directly.'
      }
    },
    {
      title: { ru: 'Способ 2: Режим «Только для выбранных приложений»', en: 'Method 2: "Only for selected apps" mode' },
      text: {
        ru: 'Если первый способ не помог, вы можете вручную указать, какие именно приложения должны использовать VPN (например, только Instagram и YouTube). Все остальные программы будут работать через ваш обычный интернет.\n\nЗайдите в Настройки приложения.\nНайдите раздел «Режим для отдельных приложений» (или Per-app proxy).\nВыберите только те программы, которым нужен VPN (например, YouTube, TikTok, Instagram).\nТеперь только выбранные приложения будут работать через BlackTemple, а банки и Госуслуги — через ваш реальный IP.',
        en: 'If the first method didn\'t work, you can manually specify which apps should use the VPN. All other programs will work through your regular internet.\n\nGo to the app Settings.\nFind the "Per-app proxy" section.\nSelect only the programs that need VPN.\nNow only selected apps will work through BlackTemple, and banks/Gosuslugi through your real IP.'
      }
    }
  ]
});

const getVpnPermissionErrorGuide = (platform: 'ios' | 'android'): Guide => {
  const steps: Step[] = [];

  if (platform === 'android') {
    steps.push({
      title: { ru: 'Откройте настройки сети', en: 'Open network settings' },
      text: { 
        ru: 'Зайдите в Настройки телефона.\nВыберите раздел Сеть и интернет (на некоторых телефонах он называется «Подключения» или «Другие подключения»).\nНайдите пункт VPN.', 
        en: 'Go to your phone\'s Settings.\nSelect Network & internet (on some phones it is called "Connections" or "Other connections").\nFind VPN.' 
      }
    });
    steps.push({
      title: { ru: 'Отключите Постоянный VPN у других приложений', en: 'Disable Always-on VPN for other apps' },
      text: { 
        ru: 'Вы увидите список установленных VPN-приложений. Нажмите на значок шестеренки ⚙️ рядом с тем приложением, которое вы использовали ранее (например, Amnezia, Happ или любой другой сервис).\nВыключите тумблер «Постоянный VPN» (или Always-on VPN).', 
        en: 'You will see a list of installed VPN apps. Tap the gear icon ⚙️ next to the app you used previously (e.g., Amnezia, Happ, etc.).\nTurn off the "Always-on VPN" switch.' 
      }
    });
    steps.push({
      title: { ru: 'Завершите настройку', en: 'Complete the setup' },
      text: { 
        ru: 'Также убедитесь, что выключен пункт «Блокировать соединения без VPN».\nВернитесь в приложение BlackTemple и нажмите «Далее».', 
        en: 'Also ensure that "Block connections without VPN" is turned off.\nReturn to the BlackTemple app and press "Next".' 
      }
    });
  } else {
    // ios
    steps.push({
      title: { ru: 'Зайдите в настройки VPN', en: 'Go to VPN settings' },
      text: { 
        ru: 'На iOS логика немного другая — система сама переключает профили, но иногда старые конфигурации мешают работе.\n\nЗайдите в Настройки -> Основные.\nНайдите пункт VPN и управление устройством.\nНажмите на раздел VPN.', 
        en: 'On iOS the logic is slightly different — the system switches profiles itself, but sometimes old configurations interfere.\n\nGo to Settings -> General.\nFind VPN & Device Management.\nTap on the VPN section.' 
      }
    });
    steps.push({
      title: { ru: 'Отключите «Подключение по запросу»', en: 'Disable "Connect On Demand"' },
      text: { 
        ru: 'Если там включен какой-либо другой профиль (стоит синяя галочка), попробуйте нажать на значок (i) рядом с ним и убедиться, что «Подключение по запросу» выключено.', 
        en: 'If any other profile is enabled there (blue checkmark), try tapping the (i) icon next to it and make sure "Connect On Demand" is turned off.' 
      }
    });
    steps.push({
      title: { ru: 'Удалите старые профили (при необходимости)', en: 'Delete old profiles (if necessary)' },
      text: { 
        ru: 'Если проблема сохраняется, удалите старые профили VPN, которыми вы больше не пользуетесь, и перезапустите BlackTemple.', 
        en: 'If the problem persists, delete old VPN profiles you no longer use and restart BlackTemple.' 
      }
    });
  }

  return {
    slug: 'vpn-permission-error',
    title: { ru: 'Ошибка «Кажется Вы не дали разрешение»', en: 'Error "Seems you didn\'t grant permission"' },
    description: { 
      ru: 'Что делать, если после скачивания появляется ошибка о разрешениях, хотя вы их уже дали.', 
      en: 'What to do if a permission error appears after downloading, even though you already granted them.' 
    },
    warning: {
      ru: 'Если вы уже нажимали «Разрешить» при первом запуске, но приложение всё равно показывает этот экран, значит в настройках телефона включена функция «Постоянный VPN» (или аналогичная) для другого приложения. Её нужно отключить.',
      en: 'If you already tapped "Allow" on the first launch, but the app still shows this screen, it means "Always-on VPN" (or similar) is enabled for another app in your phone settings. It must be disabled.'
    },
    steps
  };
};

const getMissedPaymentGuide = (): Guide => ({
  slug: 'missed-payment',
  title: { ru: 'Средства не поступили на баланс', en: 'Funds not credited to balance' },
  description: {
    ru: 'Что делать, если после оплаты баланс не пополнился.',
    en: 'What to do if your balance was not updated after payment.'
  },
  warning: {
    ru: 'Не переживайте, все платежи проходят через официальный шлюз банка и фиксируются в системе.',
    en: 'Do not worry, all payments go through an official bank gateway and are recorded in the system.'
  },
  steps: [
    {
      title: { ru: 'Подождите 1 час', en: 'Wait 1 hour' },
      text: {
        ru: 'Обычно средства зачисляются мгновенно, но из-за особенностей работы банковских систем и подтверждений транзакций задержка может составлять до 60 минут.',
        en: 'Usually, funds are credited instantly, but due to the specifics of banking systems and transaction confirmations, the delay can be up to 60 minutes.'
      }
    },
    {
      title: { ru: 'Проверьте чек', en: 'Check your receipt' },
      text: {
        ru: 'Убедитесь, что оплата прошла успешно и средства списались с вашей карты. Копия чека должна прийти на почту, которую вы указывали при оплате.',
        en: 'Make sure the payment was successful and the funds were debited from your card. a copy of the receipt should be sent to the email you provided during payment.'
      }
    },
    {
      title: { ru: 'Обратитесь в техподдержку', en: 'Contact Support' },
      text: {
        ru: 'Если с момента оплаты прошло более одного часа, а баланс в боте или на сайте не обновился — напишите нам.\n\nДля обращения подготовьте:\n• Скриншот чека об оплате.\n• Ваш ID в боте (его можно найти в личном кабинете).',
        en: 'If more than an hour has passed since payment and the balance in the bot or on the website has not updated — write to us.\n\nPrepare for your ticket:\n• Screenshot of the payment receipt.\n• Your bot ID (can be found in your dashboard).'
      }
    }
  ]
});

const getGeminiGuide = (platform: string): Guide => {
  const steps: Step[] = [
    {
      title: { ru: 'Проверка через Инкогнито и кэш', en: 'Check via Incognito and cache' },
      text: {
        ru: 'Google часто блокирует доступ, используя данные о вашем местоположении из текущего аккаунта или кэша.\n\nПопробуйте зайти в Gemini через режим Инкогнито.\n\nЕсли в инкогнито работает: очистите кэш и cookie в настройках браузера.\n\nЕсли не помогает: создайте новый, «чистый» Google-аккаунт под включенным VPN специально для нейросети.',
        en: 'Google often blocks access using location data from your current account or cache.\n\nTry accessing Gemini through Incognito mode.\n\nIf it works in Incognito: clear your browser\'s cache and cookies.\n\nIf it doesn\'t help: create a new, "clean" Google account while connected to the VPN specifically for the AI.'
      }
    },
    {
      title: { ru: 'Отключение режима для отдельных приложений', en: 'Disable per-app VPN' },
      text: {
        ru: 'Если у вас включена фильтрация трафика, VPN может просто не подхватывать нужные запросы.\n\nЗайдите в Настройки приложения.\n\nОтключите «Режим для отдельных приложений», если он был включен. Весь трафик устройства должен идти через VPN.',
        en: 'If you have traffic filtering enabled, the VPN may simply not intercept the necessary requests.\n\nGo to the app Settings.\n\nDisable "Per-app proxy" if it was enabled. All device traffic must go through the VPN.'
      }
    }
  ];

  if (platform !== 'Android') {
    steps.push({
      title: { ru: 'Обновление GeoIP и Geosite', en: 'Update GeoIP and Geosite' },
      text: {
        ru: 'Нужно обновить внутренние списки адресов, чтобы приложение корректно определяло сервисы Google.\n\nВ приложении нажмите на 3 полоски (меню) -> Настройки.\n\nНажмите кнопку "Обновить GeoIP и обновить geosite".\n\nПерезагрузите устройство и проверьте работу.',
        en: 'You need to update internal address lists so the app can correctly detect Google services.\n\nIn the app, click the 3 lines (menu) -> Settings.\n\nClick the "Update GeoIP" and "Update geosite" buttons.\n\nRestart your device and check if it works.'
      }
    });
  }

  return {
    slug: 'gemini-error',
    title: { ru: 'Что делать, если не работает Gemini?', en: 'What to do if Gemini doesn\'t work?' },
    description: {
      ru: 'Если Google Gemini выдает ошибку региона или не загружается при включенном VPN, выполните эти шаги.',
      en: 'If Google Gemini gives a region error or does not load while connected to VPN, follow these steps.'
    },
    warning: {
      ru: 'Внимание: на роутерах (например, Keenetic) и серверах работа Gemini не поддерживается.',
      en: 'Please note: Gemini is not supported on routers (e.g., Keenetic) and servers.'
    },
    steps
  };
};

const getDownloadAppGuide = (platform: 'ios' | 'android'): Guide => {
  const steps: Step[] = [];

  if (platform === 'android') {
    steps.push({
      title: { ru: 'Вариант 1: Настройка Google Play', en: 'Option 1: Google Play setup' },
      text: {
        ru: 'Включите VPN и выберите страну (рекомендуем США или Германия).\n\nСоздайте новый аккаунт Google, не выключая VPN.\n\nОткройте Google Play, нажмите на иконку профиля и переключитесь на этот новый аккаунт.\n\nЗайдите в Настройки телефона -> Приложения -> Google Play. Нажмите «Остановить» и «Очистить кэш».\n\nПерезагрузите устройство и ищите приложение заново.',
        en: 'Turn on VPN and select a country (US or Germany recommended).\n\nCreate a new Google account without turning off VPN.\n\nOpen Google Play, click on the profile icon and switch to this new account.\n\nGo to Phone Settings -> Apps -> Google Play. Click "Force stop" and "Clear cache".\n\nRestart your device and search for the app again.'
      }
    });
    steps.push({
      title: { ru: 'Вариант 2: Прямая загрузка (если первый способ не помог)', en: 'Option 2: Direct download (if the first method failed)' },
      text: {
        ru: 'Этот метод полностью обходит ограничения магазина. Просто скачайте установочный файл напрямую со включенным VPN:\n\n[apkpure.com](https://apkpure.com)\n[apkmirror.com](https://www.apkmirror.com)\n\nНайдите нужное приложение на сайте, скачайте APK-файл и установите его как обычный файл. 😊',
        en: 'This method completely bypasses store restrictions. Just download the installation file directly with VPN enabled:\n\n[apkpure.com](https://apkpure.com)\n[apkmirror.com](https://www.apkmirror.com)\n\nFind the needed app on the site, download the APK file and install it as a regular file. 😊'
      }
    });
  } else {
    steps.push({
      title: { ru: 'Создание нового профиля Apple ID', en: 'Creating a new Apple ID profile' },
      text: {
        ru: 'На iPhone альтернативных магазинов нет, поэтому поможет только создание нового профиля:\n\nВключите VPN и выберите нужную страну.\n\nЗайдите в Настройки -> Ваше имя -> Медиаматериалы и покупки -> Выйти.\n\nСоздайте новый Apple ID со включенным VPN, при регистрации выберите страну (например, США или Казахстан).\n\nВойдите в App Store под новым аккаунтом.\n\nНайдите и скачайте нужное приложение.\n\nПосле установки можно вернуться на свой основной аккаунт — приложение останется на устройстве и будет работать.',
        en: 'There are no alternative stores on iPhone, so only creating a new profile will help:\n\nTurn on VPN and choose the desired country.\n\nGo to Settings -> Your Name -> Media & Purchases -> Sign Out.\n\nCreate a new Apple ID with VPN enabled, select a country during registration (e.g., USA or Kazakhstan).\n\nLog into the App Store with the new account.\n\nFind and download the application.\n\nAfter installation, you can return to your main account — the app will remain on the device and work.'
      }
    });
  }

  return {
    slug: 'download-unavailable-apps',
    title: { ru: 'Как скачать недоступные приложения', en: 'How to download unavailable apps' },
    description: {
      ru: 'Что делать, если нужное приложение не ищется или пишет «Недоступно в вашем регионе».',
      en: 'What to do if the required application is not found or says "Unavailable in your region".'
    },
    steps
  };
};

export const knowledgeBase: Category[] = [
  {
    slug: 'windows',
    name: 'Windows',
    icon: Monitor,
    guides: [
      {
        slug: 'install',
        title: { ru: 'Установка на Windows', en: 'Windows Installation' },
        description: { 
          ru: 'Как установить и запустить официальный клиент на Windows.', 
          en: 'How to install and run the official client on Windows.' 
        },
        steps: [
          {
            title: { ru: 'Скачайте программу', en: 'Download the app' },
            text: { 
              ru: 'Загрузите официальный клиент BlackTemple для Windows по ссылке ниже.', 
              en: 'Download the official BlackTemple client for Windows from the link below.' 
            },
            link: 'https://github.com/BLACKTEMPLE-SPACE/blacktemple_windows/releases/tag/windows1-3-2',
            linkText: { ru: 'Скачать для Windows', en: 'Download for Windows' }
          },
          {
            title: { ru: 'Установите и запустите', en: 'Install and run' },
            text: { 
              ru: 'Запустите скачанный файл и следуйте инструкциям на экране для завершения установки. Затем укажите ваш ключ.', 
              en: 'Run the downloaded file and follow the on-screen instructions to complete the installation. Then enter your key.' 
            },
            internalLink: {
              url: '/windows/find-key',
              text: { ru: 'Где найти ключ (KEY)?', en: 'Where to find your key (KEY)?' }
            }
          }
        ]
      },
      getFindKeyGuide(),
      getAddDeviceGuide(),
      getChangePlanGuide(),
      getMissedPaymentGuide(),
      getBotProblemsGuide(),
      getDifferentBalanceGuide(),
      getTorrentBanGuide(),
      getInternetProblemsGuide(),
      getKeyErrorGuide('Windows'),
      getConnectionErrorGuide('windows'),
      getTelegramGuide('Windows'),
      getGeminiGuide('Windows'),
      getSlowSitesGuide('Windows'),
      getRuSitesGuide()
    ]
  },
  {
    slug: 'macos',
    name: 'macOS',
    icon: Apple,
    guides: [
      {
        slug: 'install',
        title: { ru: 'Установка на macOS', en: 'macOS Installation' },
        description: { ru: 'Установка клиента на компьютерах Mac.', en: 'Installation of the client on Mac computers.' },
        steps: [
          { 
            title: { ru: 'Скачайте из App Store', en: 'Download from App Store' }, 
            text: { ru: 'Загрузите приложение BlackTemple из официального магазина Apple.', en: 'Download the BlackTemple app from the official Apple store.' },
            link: 'https://apps.apple.com/ru/app/blacktemple-vpn/id6745765361',
            linkText: { ru: 'Скачать в App Store', en: 'Download on the App Store' }
          },
          { 
            title: { ru: 'Откройте приложение', en: 'Open the app' }, 
            text: { ru: 'Запустите приложение и разрешите добавление VPN-конфигурации. Затем укажите ключ подключения.', en: 'Launch the app and allow adding VPN configuration. Then enter your connection key.' },
            internalLink: {
              url: '/macos/find-key',
              text: { ru: 'Где найти ключ (KEY)?', en: 'Where to find your key (KEY)?' }
            }
          }
        ]
      },
      getFindKeyGuide(),
      getAddDeviceGuide(),
      getChangePlanGuide(),
      getMissedPaymentGuide(),
      getBotProblemsGuide(),
      getDifferentBalanceGuide(),
      getTorrentBanGuide(),
      getInternetProblemsGuide(),
      getKeyErrorGuide('macOS'),
      getConnectionErrorGuide('other'),
      getTelegramGuide('macOS'),
      getGeminiGuide('macOS'),
      getSlowSitesGuide('macOS'),
      getRuSitesGuide()
    ]
  },
  {
    slug: 'ios',
    name: 'iOS',
    icon: Smartphone,
    guides: [
      {
        slug: 'install',
        title: { ru: 'Установка на iOS', en: 'iOS Installation' },
        description: { ru: 'Настройка приложения на iPhone и iPad.', en: 'Setting up the app on iPhone and iPad.' },
        steps: [
          { 
            title: { ru: 'Загрузите из App Store', en: 'Download from App Store' }, 
            text: { ru: 'Перейдите по ссылке ниже и установите приложение.', en: 'Follow the link below and install the application.' },
            link: 'https://apps.apple.com/ru/app/blacktemple-vpn/id6745765361',
            linkText: { ru: 'Скачать в App Store', en: 'Download on the App Store' }
          },
          { 
            title: { ru: 'Настройте VPN', en: 'Configure VPN' }, 
            text: { ru: 'При первом запуске разрешите устройству создать VPN-профиль. Затем вставьте ваш ключ и подключитесь.', en: 'On first launch, allow the device to create a VPN profile. Then enter your key and connect.' },
            internalLink: {
              url: '/ios/find-key',
              text: { ru: 'Где найти ключ (KEY)?', en: 'Where to find your key (KEY)?' }
            }
          }
        ]
      },
      getFindKeyGuide(),
      getAddDeviceGuide(),
      getChangePlanGuide(),
      getMissedPaymentGuide(),
      getBotProblemsGuide(),
      getDifferentBalanceGuide(),
      getTorrentBanGuide(),
      getInternetProblemsGuide(),
      getKeyErrorGuide('iOS'),
      getConnectionErrorGuide('mobile'),
      getVpnPermissionErrorGuide('ios'),
      getTelegramGuide('iOS'),
      getGeminiGuide('iOS'),
      getWhatsAppGuide(),
      getDownloadAppGuide('ios'),
      getTikTokIosGuide(),
      getVpnDisconnectIosGuide(),
      getSlowSitesGuide('iOS'),
      getRuSitesGuide()
    ]
  },
  {
    slug: 'android',
    name: 'Android',
    icon: Smartphone,
    guides: [
      {
        slug: 'install',
        title: { ru: 'Установка на Android', en: 'Android Installation' },
        description: { ru: 'Как загрузить и установить APK файл на Android.', en: 'How to download and install the APK file on Android.' },
        steps: [
          { 
            title: { ru: 'Скачайте APK-файл', en: 'Download APK file' }, 
            text: { ru: 'Загрузите клиент по прямой ссылке с GitHub.', en: 'Download the client via direct link from GitHub.' },
            link: 'https://github.com/BLACKTEMPLE-SPACE/Blacktemple.apk/releases/download/build601/blacktemple-1-3-0build601.apk',
            linkText: { ru: 'Скачать APK', en: 'Download APK' }
          },
          { 
            title: { ru: 'Разрешите установку', en: 'Allow installation' }, 
            text: { ru: 'Если потребуется, разрешите установку приложений из неизвестных источников в настройках устройства. Затем запустите клиент и введите ваш ключ.', en: 'If required, allow installation of apps from unknown sources in your device settings. Then launch the client and enter your key.' },
            internalLink: {
              url: '/android/find-key',
              text: { ru: 'Где найти ключ (KEY)?', en: 'Where to find your key (KEY)?' }
            }
          }
        ]
      },
      getFindKeyGuide(),
      getAddDeviceGuide(),
      getChangePlanGuide(),
      getMissedPaymentGuide(),
      getBotProblemsGuide(),
      getDifferentBalanceGuide(),
      getTorrentBanGuide(),
      getInternetProblemsGuide(),
      getKeyErrorGuide('Android'),
      getConnectionErrorGuide('mobile'),
      getVpnPermissionErrorGuide('android'),
      getTelegramGuide('Android'),
      getGeminiGuide('Android'),
      getWhatsAppGuide(),
      getDownloadAppGuide('android'),
      getTikTokAndroidGuide(),
      getVpnDisconnectAndroidGuide(),
      getSlowSitesGuide('Android'),
      getRuSitesGuide()
    ]
  },
  {
    slug: 'linux',
    name: 'Linux',
    icon: Terminal,
    guides: [
      {
        slug: 'install',
        title: { ru: 'Установка на Linux', en: 'Linux Installation' },
        description: { ru: 'Установка клиента Happ на Linux.', en: 'Installation of the Happ client on Linux.' },
        steps: [
          { 
            title: { ru: 'Установите приложение', en: 'Install the app' }, 
            text: { ru: 'Выполните следующие команды в терминале для загрузки и установки клиента Happ.', en: 'Run the following commands in your terminal to download and install the Happ client.' },
            code: 'wget https://github.com/Happ-proxy/happ-desktop/releases/download/2.9.1/Happ.linux.x64.deb && \\\nsudo dpkg -i Happ.linux.x64.deb && \\\nsudo apt-get install -f'
          },
          {
            title: { ru: 'Получите ключ', en: 'Get the key' },
            text: { ru: 'После открытия приложения вам понадобится ключ доступа с протоколом VLESS. Ознакомьтесь с нашей инструкцией «Как сменить протокол на VLESS» в этом же разделе.', en: 'After opening the app, you will need an access key with the VLESS protocol. Check our "How to switch to VLESS protocol" guide in this section.' },
            internalLink: {
              url: '/linux/vless-protocol',
              text: { ru: 'Как сменить протокол на VLESS?', en: 'How to switch to VLESS protocol?' }
            }
          }
        ]
      },
      {
        slug: 'vless-protocol',
        title: { ru: 'Как сменить протокол на VLESS', en: 'How to switch to VLESS protocol' },
        description: { ru: 'Инструкция по переключению протокола устройства на VLESS.', en: 'Guide on switching your device protocol to VLESS.' },
        steps: [
          {
            title: { ru: 'Войдите в личный кабинет', en: 'Log in to your dashboard' },
            text: { ru: 'Откройте сайт [blacktemple.online](https://blacktemple.online) или Telegram-бота [@blacktemple_space_bot](https://t.me/blacktemple_space_bot) (в зависимости от того, где вы пополняли баланс).', en: 'Open the website [blacktemple.online](https://blacktemple.online) or the Telegram bot [@blacktemple_space_bot](https://t.me/blacktemple_space_bot) (depending on where you added funds).' }
          },
          {
            title: { ru: 'Найдите раздел «Мои устройства»', en: 'Find "My Devices"' },
            text: { ru: 'Пролистайте главную страницу вниз до списка ваших активных устройств.', en: 'Scroll down the main page to the list of your active devices.' }
          },
          {
            title: { ru: 'Выберите устройство', en: 'Select a device' },
            text: { ru: 'Нажмите на название нужного устройства (например, «Основной»).', en: 'Click on the name of the desired device (e.g., "Main").' }
          },
          {
            title: { ru: 'Смените протокол', en: 'Change the protocol' },
            text: { ru: 'В открывшемся меню найдите пункт «Протокол». Нажмите на текущий протокол и выберите из списка VLESS.', en: 'In the menu, find the "Protocol" setting. Click on your current protocol and select VLESS from the list.' }
          },
          {
            title: { ru: 'Обновите ключ', en: 'Update the key' },
            text: { ru: 'После смены протокола скопируйте обновленный ключ из поля KEY. Заново вставьте его в ваше VPN-приложение (например, в Happ), чтобы изменения вступили в силу.', en: 'After changing the protocol, copy the updated key from the KEY field. Paste it into your VPN application (e.g., Happ) for the changes to take effect.' }
          }
        ]
      },
      getAddDeviceGuide(),
      getChangePlanGuide(),
      getMissedPaymentGuide(),
      getBotProblemsGuide(),
      getDifferentBalanceGuide(),
      getTorrentBanGuide(),
      getInternetProblemsGuide(),
      getKeyErrorGuide('Linux')
    ]
  }
];

export function getCategoryBySlug(slug: string) {
  return knowledgeBase.find((c) => c.slug === slug);
}

export function getGuideBySlug(categorySlug: string, guideSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.guides.find((g) => g.slug === guideSlug);
}
