// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  h: {
    width: W - 60,
    textAlign: 'left',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: Platform.OS === 'ios' ? 15 : 23
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
    fonts: { fontFamilyH1 },
    colors: { secondary, text }
  } = useTheme()
  return (
    <Text
      style={[h, textStyle, { fontFamily: fontFamilyH1, color: text, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H1 }
