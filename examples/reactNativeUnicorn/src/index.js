/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
///* eslint-disable */
import React, { useState } from 'react'
import { Platform, StatusBar, Switch, View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import AppNavigator from './AppNavigator'

const fontFamily = {
  fontFamilyH0: 'Etna',
  fontFamilyH1: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontFamilyH2: Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush',
  fontFamilyH3: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontFamilyH4: 'Avenir Next',
  fontFamilyH5: 'Avenir Next',
  fontFamilyH6: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontFamilyH7: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontFamilyH8: '3270Narrow'
}

const mainColor = {
  primary: '#50E3C2',
  secondary: '#ff06f4'
}

const DarkTheme = {
  dark: true,
  colors: {
    ...mainColor,
    buttonColor: '#50E3C2',
    backgroundColor: '#1D1E1F',
    backgroundColor2: '#222325',
    text: '#ffffff',
    h4: '#707070',
    h5: '#D1CDCD',
    h7: '#ffffff',
    placeholderTextColor: '#707070'
  },
  fonts: {
    ...fontFamily
  }
}

const LightTheme = {
  dark: false,
  colors: {
    ...mainColor,
    buttonColor: '#1D1E1F',
    backgroundColor: '#ffffff',
    backgroundColor2: '#ffffff',
    text: '#1D1E1F',
    h4: '#707070',
    h5: '#D1CDCD',
    h7: '#1D1E1F',
    placeholderTextColor: '#707070'
  },
  fonts: {
    ...fontFamily
  }
}

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
