import React, { memo } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { PINK, BLUE, BG } from '../../constants'

const circle = {
  width: 35,
  height: 35,
  borderRadius: 35 / 2,
  backgroundColor: BG,
}

type Props = {
  uri: string,
  onPress: Function
}
const IconCircle = memo <Props >(({ uri, onPress }) => {
    const { pink, blue, iconBg, icon,  } = styles
    return (
      <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
        <View style={blue}>
          <View style={pink}>
            <View style={iconBg}>
              <Image source={{uri}} style={icon}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  })

const styles = StyleSheet.create({
  blue: {
    ...circle,
    backgroundColor: BLUE
  },
  pink: {
    ...circle,
    backgroundColor: PINK,
    top: 2
  },
  iconBg: {
    ...circle,
    right: 2,
    justifyContent:'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20
  }
})
export { IconCircle }
