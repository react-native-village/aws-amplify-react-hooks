// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1: {
    fontFamily: '3270Narrow',
    fontSize: 36
  }
})

type Props = {
  title: string
}

const H1 = memo<Props>(({ title }) => {
  const { container, h1 } = styles
  return (
    <View style={container}>
      <Text style={[h1, { color: BLUE }]}>{title}</Text>
      <Text style={[h1, { color: PINK, marginTop: -41, marginLeft: -2 }]}>{title}</Text>
      <Text style={[h1, { color: WHITE, marginTop: -39 }]}>{title}</Text>
    </View>
  )
})

export { H1 }
