import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './local/en/common_en.json'

const resources = {
  en: {
    translation: translationEN
  }
}

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  keySeparator: '.',
  resources
})

export default i18n
