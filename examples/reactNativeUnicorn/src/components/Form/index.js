import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
import {
  W,
  LABEL_COLOR,
  PINK,
  BLUE,
  INPUT_COLOR,
  ERROR_COLOR,
  BORDER_COLOR,
  DISABLED_COLOR,
  DISABLED_BACKGROUND_COLOR
} from '../constants'

const FONT_SIZE = 17
const FONT_WEIGHT = '500'
const inputFontFamily = '3270Narrow'
const Form = t.form.Form // eslint-disable-line

const formValidation = {
  email: t.refinement(t.String, value => /@/.test(value)),
  password: t.refinement(t.String, value => value.length >= 8)
}

export const structJob = t.struct({
  position: t.refinement(t.String, value => value.length >= 3 && value <= 30),
  rate: t.Number,
  description: t.String
})

export const structSignIn = t.struct({
  email: formValidation.email,
  password: formValidation.password
})

export const structSignUp = t.struct({
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
})

export const structForgot = t.struct({
  email: formValidation.email
})

export const structForgotPass = t.struct({
  email: formValidation.email,
  code: t.Number,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
})

export const structConfirmSignUp = t.struct({
  code: t.Number
})

export const search = t.struct({
  search: t.String
})

export const links = t.struct({
  github: t.String,
  youtube: t.String,
  instagram: t.String,
  facebook: t.String
})


export const stylesheet = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontFamily: inputFontFamily,
      fontSize: FONT_SIZE,
      fontWeight: FONT_WEIGHT
    },
    error: {
      marginLeft: 18,
      bottom: 26,
      color: ERROR_COLOR,
      fontFamily: inputFontFamily,
      fontSize: FONT_SIZE,
      marginBottom: 7
    }
  },
  textbox: {
    normal: {
      height: 25,
      width: W - 40,
      fontFamily: inputFontFamily,
      fontSize: FONT_SIZE,
      color: PINK,
      borderBottomColor: BLUE,
      borderBottomWidth: 2,
      marginTop: 2
    },
    // the style applied when a validation error occours
    error: {
      height: 50,
      width: W - 40,
      bottom: 23,
      paddingLeft: 20,
      fontFamily: inputFontFamily,
      fontSize: FONT_SIZE,
      color: INPUT_COLOR,
      borderRadius: 15,
      borderColor: ERROR_COLOR,
      borderWidth: 0.5,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      height: 50,
      width: W - 40,
      fontFamily: inputFontFamily,
      fontSize: FONT_SIZE,
      borderRadius: 15,
      borderWidth: 0.5,
      marginBottom: 5,
      borderColor: BORDER_COLOR,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  errorBlock: {
    fontFamily: inputFontFamily,
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 18,
    marginRight: 5,
    bottom: 20,
    color: ERROR_COLOR
  }
}

export const options = {
  fields: {
    search: {
      stylesheet,
      label: 'search',
      error: 'Please enter search',
      factory: FloatingLabel
    },
    github: {
      stylesheet,
      factory: FloatingLabel
    },
    facebook: {
      stylesheet,
      factory: FloatingLabel
    },
    youtube: {
      stylesheet,
      factory: FloatingLabel
    },
    instagram: {
      stylesheet,
      factory: FloatingLabel
    },
    email: {
      stylesheet,
      placeholder: 'Email',
      secureTextEntry: false,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      error: 'Without an email address how are you going to reset your password when you forget it?',
      factory: FloatingLabel
    },
    password: {
      stylesheet,
      placeholder: 'Password',
      secureTextEntry: true,
      error: "Choose something you use on a dozen other sites or something you won't remember",
      factory: FloatingLabel
    },
    passwordConfirmation: {
      stylesheet,
      placeholder: 'Confirm Password',
      secureTextEntry: true,
      error: "Choose something you use on a dozen other sites or something you won't remember",
      factory: FloatingLabel
    },
    code: {
      stylesheet,
      placeholder: 'Verification code',
      secureTextEntry: false,
      keyboardType: 'numeric',
      error: 'Confident in their actions?',
      factory: FloatingLabel
    },
    position: {
      stylesheet,
      placeholder: 'Position',
      secureTextEntry: false,
      autoCapitalize: 'none',
      error: 'Please enter position name',
      factory: FloatingLabel
    },
    rate: {
      stylesheet,
      placeholder: 'Rate',
      secureTextEntry: false,
      autoCapitalize: 'none',
      keyboardType: 'numeric',
      error: 'Please enter rate',
      factory: FloatingLabel
    }
  }
}
