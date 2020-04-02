/**
 * @format
 */
import { AppRegistry, YellowBox } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`'
])

//window.LOG_LEVEL = 'DEBUG'

AppRegistry.registerComponent(appName, () => App)
