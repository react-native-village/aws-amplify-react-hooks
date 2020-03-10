// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1
  }
})

type H2T = {
  title: string,
  textStyle: TextStyleProp
}

const H2 = memo<H2T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h2: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  return <Text style={[h, textStyle, { fontFamily, fontSize, color, textShadowColor: secondary }]}>{title}</Text>
})

export { H2 }
