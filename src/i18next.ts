import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EN, UZ, RU } from './locales';

i18n.use(initReactI18next).init({
  resources: {
    RU,
    EN,
    UZ,
  },
  lng: localStorage.getItem('lang') || 'UZ',
  fallbackLng: localStorage.getItem('lang') || 'UZ',
  react: { useSuspense: true },
  interpolation: { escapeValue: false },
});

export default i18n;
