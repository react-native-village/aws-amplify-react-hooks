// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h6: {
    fontFamily: '3270Narrow',
    fontSize: 15,
    color: BLUE,
    textDecorationLine: 'underline'
  }
})

type ButtonLinkT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonLink = memo<ButtonLinkT>(({ title, textStyle, viewStyle, onPress }) => {
  const { container, h6 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Text style={[h6, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
})

export { ButtonLink }
