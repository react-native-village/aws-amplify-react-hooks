<<<<<<< HEAD
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { BLUE, PINK } from '../../constants'

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'IBM-Logo'
  }
})

const Button = memo(({ color = BLUE, title, onPress }) => {
  const [bg, setBg] = useState(color)
  const { img } = styles
  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={() => setBg(PINK)} onPressOut={() => setBg(BLUE)}>
      <Text style={[img, { color: bg }]}>{title}</Text>
    </TouchableWithoutFeedback>
=======
// @flow
import React, { memo, useState, useEffect } from 'react'
import { Platform, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native'
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
    width: W - 90,
    padding: 10,
    paddingTop: 13,
    textAlign: 'center',
    fontFamily: 'Etna',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 30 : 17
      },
      {
        fontSize: Platform.OS === 'ios' ? 25 : 17
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
    colors: { primary, secondary, buttonColor }
  } = useTheme()

  const [bg, setBg] = useState(buttonColor)

  useEffect(() => {
    setBg(cancel ? secondary : buttonColor)
  }, [])

  return (
    <View style={[container, { borderColor: secondary }]}>
      <View style={[sub, { borderColor: primary }]}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressIn={() => setBg(cancel ? buttonColor : secondary)}
          onPressOut={() => setBg(cancel ? secondary : buttonColor)}
        >
          <Text style={[h, textStyle, { color: bg, textShadowColor: secondary }]}>{title}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
>>>>>>> ui-kit
  )
})

export { Button }
