// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Dollar} from '../Dollar'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { GREY } from '../../constants'

type Props = {
  cost: number,
  style: TextStyleProp
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h4: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: GREY
  }
})

const Cost = memo<Props>(({ cost }) => {
  const { container, h4 } = styles
  return (
    <View style={container}>
      <Text style={h4}>{cost}</Text>
      <Dollar/>
    </View>
  )
})

export { Cost }
