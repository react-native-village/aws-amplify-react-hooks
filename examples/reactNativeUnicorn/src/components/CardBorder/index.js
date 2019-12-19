// @flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderWidth: 1,
  borderRadius: 17,
  borderColor: WHITE,
  padding: 30,
  width: '100%'
}

const styles = StyleSheet.create({
  containerWhite: {
    ...container,
    marginTop: 2,
    marginLeft: 5
  },
  containerBlue: {
    ...container,
    padding: 0,
    borderColor: BLUE
  },
  containerPink: {
    ...container,
    padding: 0,
    borderColor: PINK,
    marginLeft: -5,
    marginTop: 1
  }
})

type Props = {
  children?: React.Node
}

const CardBorder = memo<Props>(({ children }) => {
  const { containerWhite, containerBlue, containerPink } = styles
  return (
    <>
      <View style={containerBlue}>
        <View style={containerPink}>
          <View style={containerWhite}>{children}</View>
        </View>
      </View>
    </>
  )
})

export { CardBorder }
