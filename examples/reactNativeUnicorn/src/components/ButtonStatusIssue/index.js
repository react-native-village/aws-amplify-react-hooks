// @flow
import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { WHITE, BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: WHITE,
    width: '40%',
    marginTop: 2,
    marginLeft: 5
  },
  h7: {
    alignSelf: 'center',
    fontFamily: '3270Narrow',
    padding: 15,
    fontSize: 17,
    color: BLUE
  }
})

type Props = {
  title: string,
  color: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const ButtonStatusIssue = memo<Props>(({ title, color, textStyle, viewStyle }) => {
  const { h7, container } = styles
  return (
    <>
      <View style={[container, viewStyle, { borderColor: color }]}>
        <Text style={[h7, textStyle, { color }]}>{title}</Text>
      </View>
    </>
  )
})

export { ButtonStatusIssue }
