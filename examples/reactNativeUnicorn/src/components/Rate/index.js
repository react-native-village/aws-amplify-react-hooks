// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Emoji from 'react-native-emoji'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { H7 } from '..'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 4
  },
  h4: {
    paddingLeft: 6
  }
})

type RateT = {
  title: string,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const Rate = memo<RateT>(({ title, onPress, viewStyle }) => {
  const { container, sub, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={sub}>
        <Emoji name=":unicorn_face:" style={emoji} />
        <H7 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { Rate }
