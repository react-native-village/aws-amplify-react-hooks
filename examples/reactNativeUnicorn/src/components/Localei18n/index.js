import { NativeModules, Platform } from 'react-native'
import { I18n } from '@aws-amplify/core'

let langRegionLocale = 'en_US'

// If we have an Android phone
if (Platform.OS === 'android') {
  langRegionLocale = NativeModules.I18nManager.localeIdentifier || ''
} else if (Platform.OS === 'ios') {
  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ''
}

const authScreenLabels = {
  en: {
    'Sign Up': 'Create new account',
    'Sign Up Account': 'Create a new account'
  },
  ru: {
    'Sign Up': 'Создать аккаунт',
    'Forgot Password': 'Забыли пароль?',
    'Sign In Account': 'Войдите в систему',
    'Enter your email': 'Введите email',
    'Enter your password': 'Введите пароль',
    Password: 'Пароль',
    'Sign In': 'Вход',
    'Please Sign In / Sign Up': 'Войти / Создать аккаунт',
    'Sign in to your account': 'Войдите в свой аккаунт',
    'Create a new account': 'Cоздайте свой аккаунт',
    'Confirm a Code': 'Подтвердите код',
    'Confirm Sign Up': 'Подтвердите регистрацию',
    'Resend code': 'Еще отправить код',
    'Back to Sign In': 'Вернуться к входу',
    Confirm: 'Подтвердить',
    'Confirmation Code': 'Код подтверждения',
    'Sign Out': 'Выход'
  }
}

// "en_US" -> "en", "es_CL" -> "es", etc
const languageLocale = langRegionLocale.substring(0, 2)
I18n.setLanguage(languageLocale)
I18n.putVocabularies(authScreenLabels)

const Localei18n = () => null

export { Localei18n }
