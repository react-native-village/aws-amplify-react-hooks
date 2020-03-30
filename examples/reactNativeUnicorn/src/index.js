<<<<<<< HEAD
import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { Auth, API, graphqlOperation } from 'aws-amplify'
//import { AmplifyProvider } from 'aws-amplify-react-hooks'
import { AmplifyProvider } from './lib'
import AppNavigator from './AppNavigator'
import { Localei18n } from './components'
import awsconfig from '../aws-exports'

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

const client = {
  Auth,
  API,
  graphqlOperation
}

AmplifyProvider(client)

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const App = () => (
  <>
    <AmplifyProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <Localei18n />
      <AppNavigator />
    </AmplifyProvider>
  </>
)

=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
///* eslint-disable */
import React, { useState } from 'react'
import { StatusBar, Switch, View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { DarkTheme, LightTheme } from './APIComponents'

//window.LOG_LEVEL = 'DEBUG'

const App: () => React$Node = () => {
  const [value, setValue] = useState(!false)
  //const scheme = useColorScheme()
  const {
    colors: { backgroundColor }
  } = useTheme()
  const dev = !true
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={value ? DarkTheme : LightTheme}>
          <StatusBar barStyle={value ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
          {dev && (
            <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
              <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
            </View>
          )}
          <AppNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    </>
  )
}

>>>>>>> ui-kit
export default App
