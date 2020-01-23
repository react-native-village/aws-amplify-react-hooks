// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { WHITE } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h5: {
    fontFamily: '3270Narrow',
    fontSize: 14,
    color: WHITE,
    textTransform: 'uppercase'
  }
})

type H5T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H5 = memo<H5T>(({ title, viewStyle, textStyle }) => {
  const { container, h5 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h5, textStyle]}>{title}</Text>
    </View>
  )
})

export { H5 }
