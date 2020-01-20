// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { H4 } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18
  },
  h4: {
    left: 8,
    top: 2.5
  }
})

type Props = {
  title: string,
  onPress: Function
}

const Rate = memo<Props>(({ title, onPress }) => {
  const { container, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
      <View style={container}>
        <Emoji name=":unicorn_face:" style={emoji} />
        <H4 title={title} style={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { Rate }
