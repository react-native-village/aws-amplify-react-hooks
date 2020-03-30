// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H3T = {
  title: string,
  textStyle: TextStyleProp
}

const H3 = memo<H3T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h3: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 15 : 15
  return (
    <Text style={[h, textStyle, { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }]}>
      {title}
    </Text>
  )
})

export { H3 }
