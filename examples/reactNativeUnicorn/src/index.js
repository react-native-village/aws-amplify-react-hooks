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

export default App
