// @flow
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

type Props = {
  color: string,
  title: string,
  onPress: Function
}

const Button = memo<Props>(({ color = BLUE, title, onPress }) => {
  const [bg, setBg] = useState(color)
  const { img } = styles
  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={() => setBg(PINK)} onPressOut={() => setBg(BLUE)}>
      <Text style={[img, { color: bg }]}>{title}</Text>
    </TouchableWithoutFeedback>
  )
})

export { Button }
