// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import type { ViewStyleProp, ImageStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

const styles = StyleSheet.create({
  starStyle: {
    width: 27,
    height: 27
  }
})

type StarT = {
  star: boolean,
  imageStyle: ImageStyleProp,
  onPress: Function,
  viewStyle: ViewStyleProp
}

const Star = memo<StarT>(({ star = false, onPress, imageStyle, viewStyle }) => {
  const { starStyle } = styles
  const source = star ? require('./StarActive.png') : require('./StarDisable.png')
  return (
    <TouchableOpacity onPress={onPress} style={viewStyle}>
      <Image style={[starStyle, imageStyle]} source={source} />
    </TouchableOpacity>
  )
})

export { Star }
