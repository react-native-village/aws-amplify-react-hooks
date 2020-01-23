// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { BLUE, PINK } from '../constants'

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'IBM-Logo'
  }
})

type ButtonT = {
  color: string,
  title: string,
  onPress: Function,
  textStyle: TextStyleProp
}

const Button = memo<ButtonT>(({ color = BLUE, title, onPress, textStyle }) => {
  const [bg, setBg] = useState(color)
  const { img } = styles

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={() => setBg(PINK)} onPressOut={() => setBg(BLUE)}>
      <Text style={[img, textStyle, { color: bg }]}>{title}</Text>
    </TouchableWithoutFeedback>
  )
})

export { Button }
