// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold'
  }
})

type H5T = {
  title: string,
  textStyle: TextStyleProp
}

const H5 = memo<H5T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h5: { fontFamily, fontSize, color }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 23 : 23
  return <Text style={[h, textStyle, { fontFamily, fontSize: fontSize || size, color }]}>{title}</Text>
})

export { H5 }
