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

type Props = {
  title: string,
  location: string,
  age: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const ProfileInfo = memo<Props>(({ location, age }) => {
  const { container, row, upperCase, capitalize } = styles
  return (
    <View style={container}>
      <View style={row}>
        <H4 title="location:" textStyle={upperCase} />
        <H4 title={location} textStyle={capitalize} />
      </View>
      <View style={row}>
        <H4 title="age:" textStyle={upperCase} />
        <H4 title={age} />
      </View>
    </View>
  )
})

export { ProfileInfo }
