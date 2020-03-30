// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { H7 } from '..'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18
  }
})

type ButtonMarkDecisionT = {
  onPress: Function
}

const ButtonMarkDecision = memo<ButtonMarkDecisionT>(({ onPress }) => {
  const { container, emoji } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <H7 title="mark decision" textStyle={{ marginRight: 5, marginTop: 2 }} />
      <Emoji name=":unicorn_face:" style={emoji} />
    </TouchableOpacity>
  )
})

export { ButtonMarkDecision }
