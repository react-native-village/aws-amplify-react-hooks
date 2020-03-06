// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontSize: 17
  }
})

type H8T = {
  title: string
}

const H8 = memo<H8T>(({ title }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH8 },
    colors: { primary }
  } = useTheme()
  return <Text style={[h, { fontFamily: fontFamilyH8, color: primary }]}>{title}</Text>
})

export { H8 }
