// @flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { CardBorder, ButtonDeveloperSub } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

type DeveloperT = {
  title: string,
  uri: string,
  viewStyle: ViewStyleProp
}

const Developer = memo<DeveloperT>(({ title, uri, viewStyle }) => {
  const { container } = styles
  return (
    <CardBorder viewStyle={viewStyle}>
      <View style={container}>
        <ButtonDeveloperSub title={title} uri={uri} />
      </View>
    </CardBorder>
  )
})

export { Developer }
