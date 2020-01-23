// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { GREY } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h4: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: GREY
  }
})

type H4T = {
  title: string,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const H4 = memo<H4T>(({ title, viewStyle, textStyle }) => {
  const { container, h4 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h4, textStyle]}>{title}</Text>
    </View>
  )
})

export { H4 }
