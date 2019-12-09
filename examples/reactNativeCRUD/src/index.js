// flow
import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { AmplifyProvider } from 'aws-amplify-react-hooks'
//import { AmplifyProvider } from '../lib'
import AppNavigator from './AppNavigator'
import awsconfig from '../aws-exports'

const client = {
  Auth,
  API,
  graphqlOperation
}

AmplifyProvider(client)

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

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

const App = () => {
  return (
    <>
      <AmplifyProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </AmplifyProvider>
    </>
  )
}

export default App
