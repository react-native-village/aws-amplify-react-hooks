// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import type { ImageStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

const styles = StyleSheet.create({
  starStyle: {
    width: 32,
    height: 32
  }
})

type PlusT = {
  onPress: Function,
  imageStyle: ImageStyleProp
}

const Plus = memo<PlusT>(({ onPress, imageStyle }) => {
  const { starStyle } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[starStyle, imageStyle]} source={require('./plus.png')} />
    </TouchableOpacity>
  )
})

export { Plus }
