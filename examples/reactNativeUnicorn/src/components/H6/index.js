// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h6: {
    fontFamily: '3270Narrow',
    fontSize: 15,
    color: BLUE,
    textDecorationLine: 'underline'
  }
})

type Props = {
  title: string
}

const H6 = memo<Props>(({ title }) => {
  const { container, h6 } = styles
  return (
    <View style={container}>
      <Text style={h6}>{title}</Text>
    </View>
  )
})

export { H6 }
