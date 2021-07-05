import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "bg",
    fallbackLng: "bg",
    interpolation: {
      escapeValue: false
    },
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
  });

export default i18n;