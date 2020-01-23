// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h3: {
    fontFamily: '3270Narrow',
    fontSize: 21,
    color: WHITE
  }
})

type H3T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H3 = memo<H3T>(({ title, viewStyle, textStyle }) => {
  const { container, h3 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h3, textStyle]}>{title}</Text>
    </View>
  )
})

export { H3 }
