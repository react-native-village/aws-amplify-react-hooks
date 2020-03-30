// @flow
import React, { useState } from 'react'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { ThemeProvider, DarkTheme, LightTheme } from 'react-native-unicorn-uikit'
import awsconfig from '../aws-exports'
import AppNavigator from './AppNavigator'

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
  const [value, setValue] = useState(!false)
  const dev = true
  const theme = value ? DarkTheme : LightTheme
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </>
  )
}

export default App
