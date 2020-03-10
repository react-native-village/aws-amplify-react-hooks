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
  const [value, setValue] = useState(false)
  //const scheme = useColorScheme()
  const {
    colors: { backgroundColor }
  } = useTheme()
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={value ? DarkTheme : LightTheme}>
          <StatusBar barStyle={value ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
          <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
            <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
          </View>
          <AppNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    </>
  )
}

export default App
