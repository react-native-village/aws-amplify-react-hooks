// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { H4, Avatar, Rate } from '..'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  h4: {
    marginLeft: 15,
    marginRight: 15
  }
})

type ButtonDeveloperSubT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonDeveloperSub = memo<ButtonDeveloperSubT>(({ title, viewStyle, onPress }) => {
  const { container, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="small" />
      <H4 title={title} textStyle={h4} />
      <Rate title="2/433" />
    </TouchableOpacity>
  )
})

export { ButtonDeveloperSub }
