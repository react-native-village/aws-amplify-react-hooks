import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { ConfirmSignUp, Hello, SignIn, SignUp, Forgot, ForgotPassSubmit } from './screens/Authenticator'
import { User, Jobs } from './screens'
import { TabBar } from './components'
import { PURPLE } from './constants'

const TabNavigator = {
  screen: createBottomTabNavigator(
    {
      JOBS: { screen: Jobs },
      USER: { screen: User }
    },
    {
      initialRouteName: 'JOBS',
      tabBarComponent: TabBar,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      lazy: true,
      backBehavior: 'initialRoute',
      tabBarOptions: {
        showLabel: false,
        activeTintColor: PURPLE,
        inactiveTintColor: '#390032'
      }
    }
  )
}

const AppNavigator = createStackNavigator(
  {
    HELLO: { screen: Hello },
    SIGN_IN: { screen: SignIn },
    SIGN_UP: { screen: SignUp },
    FORGOT: { screen: Forgot },
    CONFIRM_SIGN_UP: { screen: ConfirmSignUp },
    FORGOT_PASSWORD_SUBMIT: { screen: ForgotPassSubmit },
    MAIN: TabNavigator
  },
  {
    initialRouteName: 'HELLO',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default createAppContainer(AppNavigator)
