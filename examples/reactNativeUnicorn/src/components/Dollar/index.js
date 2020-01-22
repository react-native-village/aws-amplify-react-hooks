// @flow
import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { GREY } from '../../constants'

type Props = {
  style: TextStyleProp
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  dollar: {
    fontFamily: '3270Narrow',
    color: GREY,
    fontSize: 24,
    fontWeight: '500'
  }
})

const Dollar = memo<Props>(({ style }) => {
  const { container, dollar } = styles
  return (
    <View style={container}>
      <Text style={[dollar, style]}>$</Text>
    </View>
  )
})

export { Dollar }
