import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // التأكد من أن اللغة صالحة، وإلا العودة للغة الافتراضية
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // ✅ الحل: استيراد صريح للملفات بدلاً من المسار الديناميكي
  // هذا يمنع Turbopack من الضياع في المسارات النسبية
  const messages = {
    ar: (await import('../app/messages/ar.json')).default,
    en: (await import('../app/messages/en.json')).default,
  };

  return {
    locale,
    // نختار الرسائل بناءً على اللغة الحالية
    messages: messages[locale as keyof typeof messages]
  };
});