// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GREY } from '../../constants'

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h4: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: GREY
  }
})

type Props = {
  title: string
}

const H4 = memo<Props>(({ title }) => {
  const { container, h4 } = styles
  return (
    <View style={container}>
      <Text style={h4}>{title}</Text>
    </View>
  )
})

export { H4 }
