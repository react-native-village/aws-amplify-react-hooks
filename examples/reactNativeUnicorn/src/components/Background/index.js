// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  img: {
    width: W
  }
})

type Props = {
  uri: string,
  onPress: Function
}

const Background = memo<Props>(({ uri, onPress }) => {
  const { container, img } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      {uri ? <Image style={img} source={{ uri }} /> : <Image style={img} source={require('./background.png')} />}
    </TouchableOpacity>
  )
})

export { Background }
