// @flow
import React, { memo } from 'react'
import { Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

type H0T = {
  title: string,
  textStyle: TextStyleProp
}

const H0 = memo<H0T>(({ title, textStyle }) => {
  const {
    dark,
    h0: { fontFamily, fontSize },
    colors: { primary, secondary }
  } = useTheme()
  return <Text style={[textStyle, { color: dark ? primary : secondary, fontFamily, fontSize }]}>{title}</Text>
})

export { H0 }
