// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import H3ForButton from './H3ForButton'

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.5
  },
  h3: {
    alignSelf: 'center',
    marginLeft: 5,
    width: 110
  }
})

type ButtonT = {
  color: string,
  title: string,
  onPress: Function,
  textStyle: TextStyleProp
}

const Button = memo<ButtonT>(({ onPress, title, textStyle }) => {
  const [shadowOpacity, setShadow] = useState(19)
  const { buttonStyle, h3 } = styles
  const {
    colors: { backgroundColor, backgroundColor2 }
  } = useTheme()

  const onPressIn = () => setShadow(0)
  const onPressOut = () => setShadow(19)

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={[
          buttonStyle,
          {
            elevation: shadowOpacity,
            backgroundColor: shadowOpacity === 0 ? backgroundColor : backgroundColor2
          }
        ]}
      >
        {shadowOpacity !== 0 && <H3ForButton title={title} textStyle={[textStyle, h3]} />}
      </View>
    </TouchableWithoutFeedback>
  )
})

export { Button }
