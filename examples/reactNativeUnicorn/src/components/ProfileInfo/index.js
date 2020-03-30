//@flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { H4 } from '../H4'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  upperCase: {
    textTransform: 'uppercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  }
})

type ProfileInfoT = {
  location: string,
  age: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const ProfileInfo = memo<ProfileInfoT>(({ location, age, textStyle, viewStyle }) => {
  const { container, row, upperCase, capitalize } = styles
  return (
    <View style={[container, viewStyle]}>
      <View style={row}>
        <H4 title="location:" textStyle={[upperCase, textStyle]} />
        <H4 title={location} textStyle={[capitalize, textStyle]} />
      </View>
      <View style={row}>
        <H4 title="age:" textStyle={[upperCase, textStyle]} />
        <H4 title={age} textStyle={textStyle} />
      </View>
    </View>
  )
})

export { ProfileInfo }
