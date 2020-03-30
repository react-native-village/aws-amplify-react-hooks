import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
<<<<<<< HEAD
import Fontisto from 'react-native-vector-icons/Fontisto'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
=======
import { useTheme } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: W,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
>>>>>>> ui-kit
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
<<<<<<< HEAD
    paddingLeft: 5,
    opacity: 0.8,
    fontSize: 35,
=======
    fontSize: 35,
    paddingLeft: 10,
>>>>>>> ui-kit
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
<<<<<<< HEAD
    marginRight: 3,
=======
    marginRight: 10,
>>>>>>> ui-kit
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
<<<<<<< HEAD
        paddingTop: 44
=======
        paddingTop: 40
>>>>>>> ui-kit
      }
    )
  }
})

<<<<<<< HEAD
const Header = memo(({ iconLeft, iconRight, colorLeft, colorRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles
=======
const Header = memo(({ iconLeft, iconRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles
  const {
    dark,
    colors: { secondary, primary }
  } = useTheme()
  const color = dark ? primary : secondary
>>>>>>> ui-kit
  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
<<<<<<< HEAD
          <Fontisto name={iconLeft} style={iconLeftStyle} color={colorLeft} />
=======
          <Fontisto name={iconLeft} style={iconLeftStyle} color={color} />
>>>>>>> ui-kit
        </TouchableOpacity>
      )}

      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
<<<<<<< HEAD
          <Fontisto name={iconRight} style={rightIconStyle} color={colorRight} />
=======
          <Fontisto name={iconRight} style={rightIconStyle} color={color} />
>>>>>>> ui-kit
        </TouchableOpacity>
      )}
    </View>
  )
})

export { Header }
