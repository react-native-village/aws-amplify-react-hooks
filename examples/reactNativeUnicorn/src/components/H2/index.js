// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 45 : 36
      },
      {
        fontSize: Platform.OS === 'ios' ? 36 : 36
      }
    )
  }
})

type H2T = {
  title: string,
  textStyle: TextStyleProp
}

const H2 = memo<H2T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH2 },
    colors: { secondary, text }
  } = useTheme()
  return (
    <Text style={[h, textStyle, { fontFamily: fontFamilyH2, color: text, textShadowColor: secondary }]}>{title}</Text>
  )
})

export { H2 }
