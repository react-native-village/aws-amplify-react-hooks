// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { BLUE } from '../../constants'

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

type H6T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H6 = memo<H6T>(({ title, textStyle, viewStyle }) => {
  const { container, h6 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h6, textStyle]}>{title}</Text>
    </View>
  )
})

export { H6 }
