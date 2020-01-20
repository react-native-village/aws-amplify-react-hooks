import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLUE } from '../../constants'

const styles = StyleSheet.create({
  card: {
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: BLUE,
    padding: 25,
    marginBottom: 20
  }
})

const Card = memo(({ children }) => {
  const { card } = styles
  return <View style={card}>{children}</View>
})

export { Card }
