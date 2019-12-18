import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  h1: {
    color: BLUE,
    fontFamily: '3270Narrow',
    fontSize: 20
  }
})

const TextLink = memo(({ title, onPress }) => {
  const { container, h1 } = styles
  return (
    <View style={container}>
      <Text style={h1} onPress={onPress}>
        {title}
      </Text>
    </View>
  )
})

export { TextLink }
