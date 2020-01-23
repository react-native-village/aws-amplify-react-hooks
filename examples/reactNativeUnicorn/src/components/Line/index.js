// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const line = {
  width: 1,
  height: 49,
  backgroundColor: WHITE
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  blue: {
    ...line,
    backgroundColor: BLUE
  },
  white: {
    ...line
  },
  pink: {
    ...line,
    backgroundColor: PINK
  }
})

const Line = () => {
  const { container, blue, white, pink } = styles
  return (
    <View style={container}>
      <View style={blue} />
      <View style={white} />
      <View style={pink} />
    </View>
  )
}

export { Line }
