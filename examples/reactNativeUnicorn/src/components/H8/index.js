// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textAlign: 'left',
    fontSize: 17
  }
})

type H8T = {
  title: string
}

const H8 = memo<H8T>(({ title }) => {
  const { h } = styles
  const {
    dark,
    fonts: { fontFamilyH8 },
    colors: { primary, secondary }
  } = useTheme()
  return <Text style={[h, { fontFamily: fontFamilyH8, color: dark ? primary : secondary }]}>{title}</Text>
})

export { H8 }
