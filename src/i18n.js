import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";

import {initReactI18next} from "react-i18next";

i18n
    .use(backend)
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next

    .init({
        backend: {
            loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/translation.json'
        },
        whitelist: ['en', 'nl'],
        nonExplicitWhitelist: true,
        load: 'languageOnly',
        fallbackLng: "en",
        debug: false,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
