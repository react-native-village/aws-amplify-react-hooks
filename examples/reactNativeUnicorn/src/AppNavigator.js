import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ConfirmSignUp, Hello, User, SignIn, SignUp, Forgot, ForgotPassSubmit } from './screens/Authenticator'

const AppNavigator = createStackNavigator(
  {
    HELLO: { screen: Hello },
    SIGN_IN: { screen: SignIn },
    SIGN_UP: { screen: SignUp },
    FORGOT: { screen: Forgot },
    CONFIRM_SIGN_UP: { screen: ConfirmSignUp },
    USER: { screen: User },
    FORGOT_PASSWORD_SUBMIT: { screen: ForgotPassSubmit }
  },
  {
    initialRouteName: 'HELLO',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
