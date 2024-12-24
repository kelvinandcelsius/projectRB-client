import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/languages/{{lng}}.json',
        },
        fallbackLng: {
            'en': ['en'],
            'en-US': ['en'],
            'en-GB': ['en'],
            'default': ['es'],
        },
        debug: false,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true
        }
    })


export default i18n