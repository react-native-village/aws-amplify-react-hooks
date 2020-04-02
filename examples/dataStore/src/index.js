/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState } from 'react'
import { Switch, View } from 'react-native'
import { ThemeProvider, DarkTheme, LightTheme } from 'react-native-unicorn-uikit'
import UIKit from './UIKit'

const App = () => {
  const [value, setValue] = useState(!false)
  const dev = true
  const theme = value ? DarkTheme : LightTheme
  return (
    <>
      <ThemeProvider theme={theme}>
        {dev && (
          <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
            <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
          </View>
        )}
        <UIKit />
      </ThemeProvider>
    </>
  )
}

export default App
