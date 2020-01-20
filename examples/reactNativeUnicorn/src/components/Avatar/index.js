// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { PINK, BLUE } from '../../constants'

const styles = StyleSheet.create({
  large: {
    marginLeft: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2
  },
  medium: {
    marginLeft: 1,
    width: 72,
    height: 72,
    borderRadius: 72 / 2
  },
  small: {
    marginLeft: 1,
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  pinkLarge: {
    width: 130,
    height: 133,
    backgroundColor: PINK,
    borderRadius: 130 / 2
  },
  pinkMedium: {
    width: 72,
    height: 72,
    backgroundColor: PINK,
    borderRadius: 72 / 2
  },
  pinkSmall: {
    width: 36,
    height: 36,
    backgroundColor: PINK,
    borderRadius: 36 / 2
  },
  blueLarge: {
    marginLeft: 1,
    width: 133,
    height: 130,
    backgroundColor: BLUE,
    borderRadius: 130 / 2
  },
  blueMedium: {
    marginLeft: 1,
    width: 74,
    height: 72,
    backgroundColor: BLUE,
    borderRadius: 72 / 2
  },
  blueSmall: {
    marginLeft: 1,
    width: 38,
    height: 35,
    backgroundColor: BLUE,
    borderRadius: 36 / 2
  }
})

type Props = {
  uri: string,
  onPress: Function,
  size: 'large' | 'medium' | 'small'
}

const Avatar = memo<Props>(({ uri, size, onPress }) => {
  const { small, medium, large, pinkSmall, pinkMedium, pinkLarge, blueSmall, blueMedium, blueLarge } = styles

  const ava = status =>
    ({
      small,
      medium,
      large
    }[status])

  const pink = status =>
    ({
      small: pinkSmall,
      medium: pinkMedium,
      large: pinkLarge
    }[status])

  const blue = status =>
    ({
      small: blueSmall,
      medium: blueMedium,
      large: blueLarge
    }[status])

  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
      <View style={pink(size)}>
        <View style={blue(size)}>
          <Image style={ava(size)} source={{ uri }} />
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { Avatar }
