// @flow
import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { PINK, BLUE, BG } from '../../constants'

const circle = {
  width: 35,
  height: 35,
  borderRadius: 35 / 2,
  backgroundColor: BG
}

const styles = StyleSheet.create({
  blue: {
    ...circle,
    height: 36,
    width: 36,
    backgroundColor: BLUE
  },
  pink: {
    ...circle,
    top: 1,
    height: 36.4,
    backgroundColor: PINK
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: 3,
    fontSize: 20
  }
})

type Props = {
  uri: string,
  name: string,
  onPress: Function
}

const IconCircle = memo<Props>(({ name, onPress }) => {
  const { pink, blue, iconBg, emoji } = styles
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
      <View style={blue}>
        <View style={pink}>
          <View style={iconBg}>
            <Emoji name={name} style={emoji} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { IconCircle }
