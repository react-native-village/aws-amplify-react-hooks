// @flow
import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { PINK, BLUE, BG } from '../../constants'

const circle = {
  width: 35,
  height: 35,
  borderRadius: 35 / 2,
  backgroundColor: BG
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
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

type IconCircleT = {
  uri: string,
  name: string,
  onPress: Function,
  viewStyle: ViewStyleProp
}

const IconCircle = memo<IconCircleT>(({ name, onPress, viewStyle }) => {
  const { container, pink, blue, iconBg, emoji } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
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
