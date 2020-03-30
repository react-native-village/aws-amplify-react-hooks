<<<<<<< HEAD
=======
/**
 * @format
 */

>>>>>>> ui-kit
import { AppRegistry, YellowBox } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`'
])

<<<<<<< HEAD
//window.LOG_LEVEL = 'DEBUG'

=======
>>>>>>> ui-kit
AppRegistry.registerComponent(appName, () => App)
