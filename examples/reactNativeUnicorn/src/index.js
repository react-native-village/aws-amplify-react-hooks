import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import AppNavigator from './AppNavigator'
import { Localei18n } from './components'
import awsconfig from '../aws-exports'

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

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Localei18n />
    <AppNavigator />
  </>
)

export default App
