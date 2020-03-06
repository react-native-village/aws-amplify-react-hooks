// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold',
    fontSize: 22
  }
})

type H4T = {
  title: string,
  textStyle: TextStyleProp
}

const H4 = memo<H4T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH4 },
    colors: { h4 }
  } = useTheme()
  return <Text style={[h, textStyle, { fontFamily: fontFamilyH4, color: h4 }]}>{title}</Text>
})

export { H4 }
