// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H1T = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const H1 = memo<H1T>(({ title, textStyle, numberOfLines, ellipsizeMode = 'tail' }) => {
  const { h } = styles
  const {
    h1: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  return (
    <Text
      style={[h, textStyle, { fontFamily, fontSize, color, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H1 }
