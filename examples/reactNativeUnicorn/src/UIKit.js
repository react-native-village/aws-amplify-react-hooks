// @flow
import React, { Component, useContext } from 'react'
import { StyleSheet, ScrollView, View, Switch, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { Button } from './components'
import { BG } from './components/constants'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: BG,
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)
