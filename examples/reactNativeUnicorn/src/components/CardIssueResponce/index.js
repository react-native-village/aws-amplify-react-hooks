//@flow
import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { CardBorder, ButtonMarkDecision, Body, ButtonDeveloperSub, ButtonComments, Space } from '..'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  align: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  commentStyle: {
    top: 5
  }
})

type Props = {
  obj: {
    uri: string,
    description: string,
    name: string,
    comments: number,
    rate: number
  },
  onPress: Function
}

const CardIssueResponce = memo<Props>(({ obj, onPress }) => {
  const { row, align, commentStyle } = styles
  const { description, name, comments, uri, rate } = obj
  return (
    <>
      <CardBorder border>
        <View style={align}>
          <ButtonComments title={comments} viewStyle={commentStyle} />
          <ButtonMarkDecision />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Space height={30} />
          <Body title={description} />
          <Space height={20} />
        </TouchableOpacity>
        <View style={row}>
          <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssueResponce }
