// @flow
import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Device } from '../../constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  h2: {
    ...Device.select({
      iphone5: {
        fontSize: 18
      },
      mi5: {
        fontSize: 18
      },
      iphone678: {
        fontSize: 26
      },
      googlePixel: {
        fontSize: 24
      },
      redmiNote5: {
        fontSize: 21
      }
    }),
    alignSelf: 'flex-start',
    fontFamily: 'ProximaNova-Bold',
    textAlign: 'left',
    color: '#12181d'
  }
})

type Props = {
  title: string
}

const HeadLineBold = memo<Props>(({ title }) => {
  const { container, h2 } = styles
  return (
    <View style={container}>
      <View>
        <Text style={h2}>{title}</Text>
      </View>
    </View>
  )
})

export { HeadLineBold }
