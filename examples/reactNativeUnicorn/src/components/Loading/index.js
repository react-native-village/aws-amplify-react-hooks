import React from 'react'
import { StyleSheet, View } from 'react-native'
<<<<<<< HEAD
import Spinner from 'react-native-spinkit'
import { PINK } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'transparent'
  }
})

const Loading = () => (
  <View style={styles.container}>
    <Spinner size={45} type="9CubeGrid" color={PINK} />
  </View>
)
=======
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
>>>>>>> ui-kit

export { Loading }
