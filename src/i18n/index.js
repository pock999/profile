import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTW from './locales/zh-TW.json';
import en from './locales/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'zh-TW': {
        translation: zhTW 
      },
      'en': {
        translation: en 
      }
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang', // ?lang=en 或 ?lang=zh-TW
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'zh-TW',
  });

export default i18n;