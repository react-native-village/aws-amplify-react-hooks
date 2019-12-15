import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Hello } from './screens/Authenticator'

const AppNavigator = createStackNavigator(
  {
    HELLO: { screen: Hello }
  },
  {
    initialRouteName: 'HELLO',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
