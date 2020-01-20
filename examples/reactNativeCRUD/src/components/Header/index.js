import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Fontisto from 'react-native-vector-icons/Fontisto'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    backgroundColor: 'transparent',
    opacity: 0.8,
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 100
      }
    )
  },
  iconLeftStyle: {
    paddingLeft: 5,
    opacity: 0.8,
    fontSize: 35,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 40
      }
    )
  },
  rightIconStyle: {
    fontSize: 35,
    marginRight: 3,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 44
      }
    )
  }
})

const Header = memo(({ iconLeft, iconRight, colorLeft, colorRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles
  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
          <Fontisto name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      )}

      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Fontisto name={iconRight} style={rightIconStyle} color={colorRight} />
        </TouchableOpacity>
      )}
    </View>
  )
})

export { Header }
