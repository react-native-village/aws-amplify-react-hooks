import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import TabNavigator from './TabNavigator'
import { TabBottom2 } from './screens'
import UIKit from './UIKit'
import { ButtonPlus } from './components'

enableScreens()

const Stack = createNativeStackNavigator()

const Tabs = () => {
  return (
    <>
      <TabNavigator.Navigator initialRouteName="TabBottom0">
        <TabNavigator.Screen name="TabBottom0" component={UIKit} />
        <TabNavigator.Screen name="TabBottom1" component={UIKit} />
        <TabNavigator.Screen name="TabBottom2" component={UIKit} />
        <TabNavigator.Screen name="TabBottom3" component={TabBottom2} />
        <TabNavigator.Screen name="TabBottom4" component={UIKit} />
      </TabNavigator.Navigator>
      <ButtonPlus />
    </>
  )
}

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Stack0" component={Tabs} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator
