// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

const styles = StyleSheet.create({
  h: {
    alignSelf: 'center',
    fontSize: 40
  }
})

type H0T = {
  title: string,
  textStyle: TextStyleProp
}

const H0 = memo<H0T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    dark,
    fonts: { fontFamilyH0 },
    colors: { primary, secondary }
  } = useTheme()
  return <Text style={[h, textStyle, { color: dark ? primary : secondary, fontFamily: fontFamilyH0 }]}>{title}</Text>
})

export { H0 }
