import { Dimensions } from 'react-native'

export const BG = '#0B0B0B'
export const PINK = '#F20AF5'
export const PURPLE = '#7A1374'
export const BLUE = '#00FFFF'
export const GREEN = '#2E7767'
export const RED = '#FC2847'
export const LABEL_COLOR = BLUE
export const INPUT_COLOR = PINK
export const ERROR_COLOR = RED
export const HELP_COLOR = '#999999'
export const BORDER_COLOR = BLUE
export const DISABLED_COLOR = '#777777'
export const DISABLED_BACKGROUND_COLOR = '#eeeeee'

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

export const Device = {
  // eslint-disable-next-line
  select(variants) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {}
    if (W >= 315 && W <= 341) return variants.iphone5 || {}
    if (W >= 342 && W <= 359) return variants.mobile342 || {}
    if (W >= 360 && W <= 374) return variants.mi5 || {}
    if (W >= 375 && W <= 399) return variants.iphone678 || {}
    if (W >= 400 && W <= 409) return variants.mobile400 || {}
    if (W >= 410 && W <= 414) return variants.googlePixel || {}
    if (W >= 415 && W <= 434) return variants.mobile415 || {}
    if (W >= 435 && W <= 480) return variants.redmiNote5 || {}
  }
}

export const goBack = navigation => () => navigation.goBack()

export const onScreen = (screen, navigation, obj) => () => {
  navigation.navigate(screen, obj)
}

export const goHome = navigation => () => navigation.popToTop()()
