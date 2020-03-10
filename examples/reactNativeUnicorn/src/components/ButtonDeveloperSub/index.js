// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { H7, Avatar, Rate } from '..'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  h: {
    width: W - 200,
    marginTop: 8,
    marginLeft: 15,
    marginRight: 5
  }
})

type ButtonDeveloperSubT = {
  title: string,
  uri: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonDeveloperSub = memo<ButtonDeveloperSubT>(({ title, viewStyle, uri, onPress }) => {
  const { container, h } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Avatar uri={uri} size="small" />
      <H7 title={title} textStyle={h} numberOfLines={1} ellipsizeMode="tail" />
      <Rate title="2/433" viewStyle={{ marginTop: 3 }} />
    </TouchableOpacity>
  )
})

export { ButtonDeveloperSub }
