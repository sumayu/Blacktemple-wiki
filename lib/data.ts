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
        ru: 'Перейдите на сайт blacktemple.online или откройте Telegram-бота @blacktemple_space_bot. Используйте тот сервис, через который вы пополняли баланс.', 
        en: 'Go to the website blacktemple.online or open the Telegram bot @blacktemple_space_bot. Use the service where you added funds.' 
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
        ru: 'Через сайт: blacktemple.online\nИли через Telegram-бота: @blacktemple_space_bot', 
        en: 'Via website: blacktemple.online\nOr via Telegram bot: @blacktemple_space_bot' 
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
        ru: 'Перейдите на сайт blacktemple.online или откройте Telegram-бота @blacktemple_space_bot.\n\nВажно: Заходите через ту платформу, где вы обычно пополняете баланс.', 
        en: 'Go to the website blacktemple.online or open the Telegram bot @blacktemple_space_bot.\n\nImportant: Log in using the platform where you usually add funds.' 
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
      getConnectionErrorGuide('windows'),
      getTelegramGuide('Windows'),
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
      getConnectionErrorGuide('other'),
      getTelegramGuide('macOS'),
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
      getConnectionErrorGuide('mobile'),
      getTelegramGuide('iOS'),
      getWhatsAppGuide(),
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
      getConnectionErrorGuide('mobile'),
      getTelegramGuide('Android'),
      getWhatsAppGuide(),
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
            text: { ru: 'Откройте сайт blacktemple.online или Telegram-бота @blacktemple_space_bot (в зависимости от того, где вы пополняли баланс).', en: 'Open the website blacktemple.online or the Telegram bot @blacktemple_space_bot (depending on where you added funds).' }
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
      getChangePlanGuide()
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
