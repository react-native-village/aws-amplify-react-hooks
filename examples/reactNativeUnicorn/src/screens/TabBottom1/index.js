import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack11, Stack12 } from './Stack'
import { Stack } from '../../AppNavigator'

export const Stack1 = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Stack11" component={Stack11} />
        <Stack.Screen name="Stack12" component={Stack12} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}
