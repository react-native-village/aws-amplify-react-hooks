// @flow
import React, { memo } from 'react'
import { FlatList } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, NavigationRoute } from '@react-navigation/native'
import faker from 'faker'
import { Space, CardIssueResponce, CardIssueResponceSub, AppContainer } from '../../../components'

type Stack03T = {
  route: NavigationRoute,
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

// eslint-disable-next-line
const res = n =>
  new Array(n).fill().map(() => {
    const { random, image, name, lorem } = faker
    return {
      id: random.uuid(),
      name: name.findName(),
      uri: image.avatar(),
      description: lorem.paragraph(),
      comments: random.number(),
      rate: random.number()
    }
  })

const array = res(10)
const Stack03 = memo<Stack03T>(({ route }) => {
  const renderItem = ({ item }) => {
    return (
      <>
        <CardIssueResponceSub obj={item} />
        <Space height={10} />
      </>
    )
  }

  return (
    <AppContainer flatlist>
      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <CardIssueResponce obj={route.params} />
            <Space height={10} />
          </>
        }
      />
    </AppContainer>
  )
})

export { Stack03 }
