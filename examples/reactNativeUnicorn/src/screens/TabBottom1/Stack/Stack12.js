// @flow
import React, { memo } from 'react'
import { NavigationState, NavigationRoute, NavigationScreenProp } from '@react-navigation/native'
import { Space, CardVacancies, AppContainer } from '../../../components'

type Stack12T = {
  route: NavigationRoute,
  navigation: NavigationScreenProp<NavigationState>
}

const Stack12 = memo<Stack12T>(({ route }) => {
  return (
    <AppContainer flatlist>
      <CardVacancies obj={route.params} detail />
      <Space height={10} />
    </AppContainer>
  )
})

export { Stack12 }
