// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h7: {
    fontFamily: '3270Narrow',
    fontSize: 17,
    color: BLUE
  }
})

type H7T = {
  title: string
}

const H7 = memo<H7T>(({ title }) => {
  const { container, h7 } = styles
  return (
    <View style={container}>
      <Text style={h7}>{title}</Text>
    </View>
  )
})

export { H7 }
