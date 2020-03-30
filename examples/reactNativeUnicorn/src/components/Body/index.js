// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textAlign: 'left',
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

type BodyT = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const Body = memo<BodyT>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const { h } = styles
  const {
    body: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  return (
    <Text
      style={[h, textStyle, { fontFamily, color, fontSize, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { Body }
