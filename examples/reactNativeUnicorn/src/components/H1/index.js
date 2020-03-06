// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  h: {
    width: W - 60,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: Platform.OS === 'ios' ? 20 : 23
  }
})

type H1T = {
  title: string,
  textStyle: TextStyleProp
}

const H1 = memo<H1T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH1 },
    colors: { secondary, text }
  } = useTheme()
  return <Text style={[h, textStyle, { fontFamily: fontFamilyH1, color: text, textShadowColor: secondary }]}>{title}</Text>
})

export { H1 }
