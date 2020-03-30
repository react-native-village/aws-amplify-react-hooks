import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack01, Stack02, Stack03 } from './Stack'
import { Stack } from '../../AppNavigator'

export const Stack0 = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Stack01" component={Stack01} />
        <Stack.Screen name="Stack02" component={Stack02} />
        <Stack.Screen name="Stack03" component={Stack03} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}
