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
    fontSize: 18,
    marginBottom: 4
  },
  h4: {
    paddingLeft: 10
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
        <H4 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { Rate }
