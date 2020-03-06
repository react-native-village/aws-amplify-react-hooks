// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textAlign: 'center',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 19 : 17
      },
      {
        fontSize: Platform.OS === 'ios' ? 12 : 17
      }
    )
  }
})

type H7T = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const H7 = memo<H7T>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH7 },
    colors: { secondary, h7 }
  } = useTheme()
  return (
    <Text
      style={[h, textStyle, { fontFamily: fontFamilyH7, color: h7, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H7 }
