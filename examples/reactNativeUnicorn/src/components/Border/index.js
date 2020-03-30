// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  containerBlue: {
    borderWidth: 1,
    paddingRight: 3,
    paddingBottom: 3,
    flexDirection: 'row'
  },
  containerPink: {
    width: W - 30,
    borderWidth: 1,
    marginLeft: -5,
    marginTop: 2
  }
})

type BorderT = {
  children?: Node,
  viewStyle: ViewStyleProp
}

const Border = memo<BorderT>(({ children, viewStyle }) => {
  const { containerBlue, containerPink } = styles
  const {
    colors: { primary, secondary }
  } = useTheme()
  return (
    <View style={[containerBlue, { borderColor: primary }]}>
      <View style={[containerPink, viewStyle, { borderColor: secondary }]}>{children}</View>
    </View>
  )
})

export { Border }
