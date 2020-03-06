// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../constants'

const container = {
  borderWidth: 1,
  borderRadius: 17,
  borderColor: WHITE
}

const styles = StyleSheet.create({
  containerWhite: {
    ...container,
    marginTop: 2,
    marginLeft: 5,
    padding: 20
  },
  containerBlue: {
    ...container,
    borderColor: BLUE,
    flexDirection: 'row'
  },
  containerPink: {
    ...container,
    borderColor: PINK,
    marginLeft: -5,
    marginTop: 1
  }
})

type CardBorderT = {
  children?: Node
}

const CardBorder = memo<CardBorderT>(({ children }) => {
  const { containerWhite, containerBlue, containerPink } = styles
  return (
    <View style={containerBlue}>
      <View style={containerPink}>
        <View style={[containerWhite]}>{children}</View>
      </View>
    </View>
  )
})

export { CardBorder }
