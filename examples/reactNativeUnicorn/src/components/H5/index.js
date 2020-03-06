// @flow
import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold',
    ...ifIphoneX(
      {
        fontSize: 25
      },
      {
        fontSize: 18
      }
    )
  }
})

type H5T = {
  title: string,
  textStyle: TextStyleProp
}

const H5 = memo<H5T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    fonts: { fontFamilyH5 },
    colors: { h5 }
  } = useTheme()
  return <Text style={[h, textStyle, { fontFamily: fontFamilyH5, color: h5 }]}>{title}</Text>
})

export { H5 }
