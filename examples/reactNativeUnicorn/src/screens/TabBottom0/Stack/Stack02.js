// @flow
import React, { memo } from 'react'
import { FlatList } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, NavigationRoute } from '@react-navigation/native'
import faker from 'faker'
import { Space, CardIssue, CardIssueResponce, AppContainer } from '../../../components'

type Stack02T = {
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
const Stack02 = memo<Stack02T>(({ route, navigation }) => {
  const _onPress = params => navigation.navigate('Stack03', params)

  const renderItem = ({ item }) => {
    return (
      <>
        <CardIssueResponce obj={item} onPress={() => _onPress(item)} />
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
            <CardIssue obj={route.params} />
            <Space height={10} />
          </>
        }
      />
    </AppContainer>
  )
})

export { Stack02 }
