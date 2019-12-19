// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const h2 = {
  fontFamily: '3270Narrow',
  fontSize: 21,
  color: BLUE
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h2pink: {
    ...h2,
    color: PINK,
    marginTop: -24,
    marginLeft: -1
  },
  h2white: {
    ...h2,
    color: WHITE,
    marginTop: -23
  }
})

type Props = {
  title: string
}

const H2 = memo<Props>(({ title }) => {
  const { container, h2pink, h2white } = styles
  return (
    <View style={container}>
      <Text style={h2}>{title}</Text>
      <Text style={h2pink}>{title}</Text>
      <Text style={h2white}>{title}</Text>
    </View>
  )
})

export { H2 }
