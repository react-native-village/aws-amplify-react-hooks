// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { WHITE, PINK, BLUE } from '../../constants'

const h1 = {
  fontFamily: '3270Narrow',
  fontSize: 36,
  color: BLUE
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1pink: {
    ...h1,
    color: PINK,
    marginTop: -41,
    marginLeft: -2
  },
  h1white: {
    ...h1,
    color: WHITE,
    marginTop: -39
  }
})

type Props = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H1 = memo<Props>(({ title, viewStyle, textStyle }) => {
  const { container, h1pink, h1white } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h1, textStyle]}>{title}</Text>
      <Text style={[h1pink, textStyle]}>{title}</Text>
      <Text style={[h1white, textStyle]}>{title}</Text>
    </View>
  )
})

export { H1 }
