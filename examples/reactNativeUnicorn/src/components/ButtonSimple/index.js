// @flow
import React, { memo } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Device, W } from '../../constants'
import { Shadow } from '../BoxShadow'

const styles = StyleSheet.create({
  container: {
    ...Device.select({
      iphone5: {
        height: 50
      },
      mi5: {
        height: 50
      },
      iphone678: {
        height: 60
      },
      googlePixel: {
        height: 60
      },
      redmiNote5: {
        height: 60
      }
    }),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Bold',
    color: 'white'
  }
})

type Props = {
  onPress: () => void,
  title: string,
  horizontal: number,
  color: string,
  isDisabled: boolean
}

const ButtonSimple = memo<Props>(
  ({ title, onPress, horizontal, color, isDisabled }) => {
    const { container, h1 } = styles
    const shadowOpt = {
      ...Device.select({
        mi5: {
          height: 50
        },
        iphone678: {
          height: 60
        },
        googlePixel: {
          height: 60
        },
        redmiNote5: {
          height: 60
        }
      }),
      width: W - 2 * horizontal,
      color: '#C4D4F7',
      border: 5,
      radius: 8,
      opacity: 0.2,
      y: 7,
      style: {
        marginHorizontal: horizontal
      }
    }
    return (
      <Shadow
        setting={shadowOpt}
        extraStyles={[{ marginHorizontal: horizontal }]}
      >
        <TouchableOpacity
          onPress={onPress}
          style={[container, { backgroundColor: color }]}
        >
          <Text style={[h1, { opacity: isDisabled ? 0.51 : 1 }]}>{title}</Text>
        </TouchableOpacity>
      </Shadow>
    )
  }
)

export { ButtonSimple }
