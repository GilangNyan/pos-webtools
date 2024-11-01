import { createI18n } from 'vue-i18n'
import en from './en.json'
import id from './id.json'

const localeSetup = createI18n({
  locale: import.meta.env.VITE_APP_LOCALE,
  fallbackLocale: import.meta.env.VITE_APP_FALLBACK_LOCALE,
  legacy: false,
  messages: {
    en: en,
    id: id,
  },
})

export default localeSetup
