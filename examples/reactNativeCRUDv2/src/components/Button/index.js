// @flow
import React, { memo, useState, useEffect } from 'react'
import { Platform, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'center'
  },
  sub: {
    marginRight: -5,
    marginTop: 2,
    marginBottom: 3,
    marginLeft: -5,
    borderWidth: 1,
    alignSelf: 'center'
  },
  h: {
    width: W - 60,
    paddingTop: Platform.OS === 'ios' ? 15 : 5,
    paddingBottom: 10,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 30 : 30
      },
      {
        fontSize: Platform.OS === 'ios' ? 30 : 40
      }
    )
  }
})

type ButtonT = {
  title: string,
  cancel: boolean,
  onPress: Function,
  textStyle: TextStyleProp
}

const Button = memo<ButtonT>(({ title, onPress, textStyle, cancel }) => {
  const { container, sub, h } = styles
  const {
    h0: { fontFamily },
    colors: { primary, secondary, buttonColor }
  } = useTheme()

  const [bg, setBg] = useState(buttonColor)

  useEffect(() => {
    setBg(cancel ? secondary : buttonColor)
  }, []) // eslint-disable-line

  return (
    <View style={[container, { borderColor: secondary }]}>
      <View style={[sub, { borderColor: primary }]}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={() => setBg(cancel ? buttonColor : secondary)}
          onPressOut={() => setBg(cancel ? secondary : buttonColor)}
        >
          <Text style={[h, textStyle, { fontFamily, color: bg, textShadowColor: secondary }]}>{title}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
})

export { Button }
