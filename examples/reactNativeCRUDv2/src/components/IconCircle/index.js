// @flow
import React, { memo } from 'react'
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { BG } from '../constants'

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
    width: 36
  },
  pink: {
    ...circle,
    top: 1,
    height: 36.4
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: Platform.OS === 'ios' ? 3 : 0,
    fontSize: Platform.OS === 'ios' ? 20 : 16
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
  const {
    colors: { primary, secondary }
  } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={[blue, { backgroundColor: primary }]}>
        <View style={[pink, { backgroundColor: secondary }]}>
          <View style={iconBg}>
            <Emoji name={name} style={emoji} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { IconCircle }
