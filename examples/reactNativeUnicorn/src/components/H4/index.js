// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold'
  }
})

type H4T = {
  title: string,
  textStyle: TextStyleProp
}

const H4 = memo<H4T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h4: { fontFamily, fontSize, color }
  } = useTheme()
  return <Text style={[h, textStyle, { fontFamily, fontSize, color }]}>{title}</Text>
})

export { H4 }
