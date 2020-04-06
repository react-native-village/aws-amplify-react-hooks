// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
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
    paddingLeft: 6,
    top: Platform.OS === 'ios' ? 0 : 4
  }
})

type ButtonCommentsT = {
  title: string,
  onPress: Function,
  viewStyle: ViewStyleProp
}

const ButtonComments = memo<ButtonCommentsT>(({ title, onPress, viewStyle }) => {
  const { container, sub, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <View style={[sub, viewStyle]}>
        <Emoji name=":thought_balloon:" style={emoji} />
        <H7 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { ButtonComments }
