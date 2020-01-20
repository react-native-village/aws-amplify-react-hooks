// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  starStyle: {
    width: 27,
    height: 27
  }
})

type Props = {
  bool: boolean,
  onPress: Function
}

const Star = memo<Props>(({ bool = false, onPress }) => {
  const { starStyle } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={starStyle} source={bool ? require('./StarActive.png') : require('./StarDisable.png')} />
    </TouchableOpacity>
  )
})

export { Star }
