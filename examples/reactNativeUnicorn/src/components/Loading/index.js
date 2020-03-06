import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Spinner from 'react-native-spinkit'

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10,
    bottom: 10
  }
})

const Loading = ({ size, animating, type }) => {
  const {
    colors: { secondary }
  } = useTheme()
  const { activityIndicator } = styles
  return <View style={activityIndicator}>{!animating && <Spinner size={size} type={type} color={secondary} />}</View>
}

export { Loading }
