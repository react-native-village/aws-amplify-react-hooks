// @flow
import React, { memo } from 'react'
import { Platform, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

type H7T = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const H7 = memo<H7T>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const {
    h7: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 12 : 12
  return (
    <Text
      style={[textStyle, { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H7 }
