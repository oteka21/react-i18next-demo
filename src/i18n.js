import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import "../locales"

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: 'fr',
    ns: ['common'],
    defaultNS: "common",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });


  export default i18n;