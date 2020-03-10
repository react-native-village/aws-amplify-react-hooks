// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h6: {
    fontSize: 15,
    textDecorationLine: 'underline'
  }
})

type ButtonLinkT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonLink = memo<ButtonLinkT>(({ title, textStyle, viewStyle, onPress }) => {
  const { container, h6 } = styles
  const {
    dark,
    body: { fontFamily, fontSize },
    colors: { primary, secondary }
  } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Text style={[h6, textStyle, { color: dark ? primary : secondary, fontFamily, fontSize }]}>{title}</Text>
    </TouchableOpacity>
  )
})

export { ButtonLink }
