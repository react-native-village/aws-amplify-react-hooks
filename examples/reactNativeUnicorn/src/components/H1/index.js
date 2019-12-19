// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const h1 = {
  fontFamily: '3270Narrow',
  fontSize: 36,
  color: BLUE
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1pink: {
    ...h1,
    color: PINK,
    marginTop: -41,
    marginLeft: -2
  },
  h1white: {
    ...h1,
    color: WHITE,
    marginTop: -39
  }
})

type Props = {
  title: string
}

const H1 = memo<Props>(({ title }) => {
  const { container, h1pink, h1white } = styles
  return (
    <View style={container}>
      <Text style={h1}>{title}</Text>
      <Text style={h1pink}>{title}</Text>
      <Text style={h1white}>{title}</Text>
    </View>
  )
})

export { H1 }
