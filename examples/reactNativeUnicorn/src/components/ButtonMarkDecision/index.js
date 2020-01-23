// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { H5 } from '..'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 120,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 4
  }
})

type ButtonMarkDecisionT = {
  onPress: Function
}

const ButtonMarkDecision = memo<ButtonMarkDecisionT>(({ onPress }) => {
  const { container, emoji } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <H5 title="mark decision" />
      <Emoji name=":unicorn_face:" style={emoji} />
    </TouchableOpacity>
  )
})

export { ButtonMarkDecision }
