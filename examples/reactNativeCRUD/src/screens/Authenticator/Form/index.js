import { Platform } from 'react-native'
import t from 'tcomb-form-native'
import FloatingLabel from 'react-native-floating-label'
import {
  LABEL_COLOR,
  INPUT_COLOR,
  ERROR_COLOR,
  HELP_COLOR,
  BORDER_COLOR,
  DISABLED_COLOR,
  DISABLED_BACKGROUND_COLOR
} from '../../../constants'

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

const FONT_SIZE = 17
const FONT_WEIGHT = '500'

// Fixme
const Form = t.form.Form // eslint-disable-line

const formStyles = {
  ...Form.stylesheet,
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 8
    },
    error: {
      marginBottom: 8,
      marginLeft: 5,
      marginRight: 5
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      marginLeft: 5,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      marginLeft: 5,
      marginRight: 5,
      fontFamily: '3270Narrow',
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      marginLeft: 5,
      marginRight: 5,
      color: HELP_COLOR,
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontFamily: '3270Narrow',
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 5,
    marginRight: 5,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {},
    error: {},
    notEditable: {}
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      height: 50,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 12,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 0.5,
      marginLeft: 5,
      marginRight: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      height: 50,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 12,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 0.5,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      height: 50,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 0.5,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerContainer: {
    normal: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 0.5
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 0.5
    },
    open: {
      // Alter styles when select container is open
    }
  },
  select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: INPUT_COLOR
      },
      ios: {}
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: ERROR_COLOR
      },
      ios: {}
    })
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR
    },
    notEditable: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  pickerValue: {
    normal: {
      fontFamily: '3270Narrow',
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {},
    notEditable: {
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: INPUT_COLOR,
    borderColor: INPUT_COLOR,
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}

export const options = {
  fields: {
    email: {
      stylesheet: formStyles,
      placeholder: 'Email',
      secureTextEntry: false,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      error: 'Without an email address how are you going to reset your password when you forget it?',
      factory: FloatingLabel
    },
    password: {
      stylesheet: formStyles,
      placeholder: 'Password',
      secureTextEntry: true,
      error: "Choose something you use on a dozen other sites or something you won't remember",
      factory: FloatingLabel
    },
    passwordConfirmation: {
      stylesheet: formStyles,
      placeholder: 'Confirm Password',
      secureTextEntry: true,
      error: "Choose something you use on a dozen other sites or something you won't remember",
      factory: FloatingLabel
    },
    code: {
      stylesheet: formStyles,
      placeholder: 'Verification code',
      secureTextEntry: false,
      keyboardType: 'numeric',
      error: 'Confident in their actions?',
      factory: FloatingLabel
    },
    position: {
      stylesheet: formStyles,
      placeholder: 'Position',
      secureTextEntry: false,
      autoCapitalize: 'none',
      error: 'Please enter position name',
      factory: FloatingLabel
    },
    rate: {
      stylesheet: formStyles,
      placeholder: 'Rate',
      secureTextEntry: false,
      autoCapitalize: 'none',
      keyboardType: 'numeric',
      error: 'Please enter rate',
      factory: FloatingLabel
    },
    description: {
      stylesheet: {
        ...Form.stylesheet,
        controlLabel: {
          normal: {
            color: LABEL_COLOR,
            fontFamily: '3270Narrow',
            fontSize: FONT_SIZE,
            marginLeft: 5,
            marginBottom: 7,
            justifyContent: 'center',
            fontWeight: FONT_WEIGHT
          },
          error: {
            color: ERROR_COLOR,
            fontFamily: '3270Narrow',
            fontSize: FONT_SIZE,
            marginLeft: 5,
            marginRight: 7,
            fontWeight: FONT_WEIGHT
          }
        },
        textbox: {
          normal: {
            height: 300,
            color: INPUT_COLOR,
            fontFamily: '3270Narrow',
            fontSize: FONT_SIZE,
            paddingHorizontal: 12,
            borderRadius: 4,
            textAlignVertical: 'top',
            borderColor: BORDER_COLOR,
            borderWidth: 0.5,
            paddingTop: 13,
            paddingBottom: 0,
            marginLeft: 5,
            marginRight: 5
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 150
          }
        }
      },
      placeholder: 'Description',
      secureTextEntry: false,
      multiline: true,
      autoCapitalize: 'none',
      error: 'Please enter rate',
      factory: FloatingLabel
    }
  }
}
