// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { PINK, BLUE } from '../../constants'

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2
  },
  pink: {
    width: 130,
    height: 133,
    backgroundColor: PINK,
    borderRadius: 130 / 2
  },
  blue: {
    marginLeft: 1,
    width: 133,
    height: 130,
    backgroundColor: BLUE,
    borderRadius: 130 / 2
  }
})

type Props = {
  uri: string,
  onPress: Function
}

const Avatar = memo<Props>(({ uri, onPress }) => {
  const { avatar, pink, blue } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={pink}>
        <View style={blue}>
          <Image style={avatar} source={{ uri }} />
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { Avatar }
