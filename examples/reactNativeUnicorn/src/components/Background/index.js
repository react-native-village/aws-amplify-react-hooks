// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  img: {
    width: W,
    height: W / 1.8
  }
})

type Props = {
  uri: string,
  onPress: Function,
  children?: Node
}

const Background = memo<Props>(({ children, uri, onPress }) => {
  const { container, img } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <ImageBackground style={img} source={uri ? { uri } : require('./background.png')}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  )
})

export { Background }
