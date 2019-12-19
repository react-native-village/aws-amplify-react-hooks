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
  h5: {
    fontFamily: '3270Narrow',
    fontSize: 14,
    color: WHITE,
    textTransform: 'uppercase'
  }
})

type Props = {
  title: string
}

const H5 = memo<Props>(({ title }) => {
  const { container, h5 } = styles
  return (
    <View style={container}>
      <Text style={h5}>{title}</Text>
    </View>
  )
})

export { H5 }
