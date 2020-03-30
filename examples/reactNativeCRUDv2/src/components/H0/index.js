// @flow
import React, { memo } from 'react'
import { Platform, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

type H0T = {
  title: string,
  textStyle: TextStyleProp
}

const H0 = memo<H0T>(({ title, textStyle }) => {
  const {
    dark,
    h0: { fontSize, fontFamily },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 35 : 45
  return (
    <Text style={[textStyle, { color: dark ? primary : secondary, fontFamily, fontSize: fontSize || size }]}>
      {title}
    </Text>
  )
})

export { H0 }
