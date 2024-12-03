import { localize, setLocale } from '@vee-validate/i18n'
import { all } from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'
import localeSetup from '../locale/locale.config'
import en from '@/shared/infrastructures/configs/locale/en.json'
import id from '@/shared/infrastructures/configs/locale/id.json'

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})

configure({
  generateMessage: localize({ en, id }),
})

setLocale(localeSetup.global.locale.value)
