// @flow
import React, { memo } from 'react'
import { Platform, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

type H8T = {
  title: string,
  textStyle: TextStyleProp
}

const H8 = memo<H8T>(({ title, textStyle }) => {
  const {
    dark,
    h8: { fontFamily, fontSize },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 16 : 16
  return (
    <Text style={[textStyle, { fontFamily, fontSize: fontSize || size, color: dark ? primary : secondary }]}>
      {title}
    </Text>
  )
})

export { H8 }
