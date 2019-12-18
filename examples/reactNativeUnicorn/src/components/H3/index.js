// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1: {
    fontFamily: '3270Narrow',
    fontSize: 21
  }
})

type Props = {
  title: string
}

const H3 = memo<Props>(({ title }) => {
  const { container, h1 } = styles
  return (
    <View style={container}>
      <Text style={[h1, { color: WHITE }]}>{title}</Text>
    </View>
  )
})

export { H3 }
