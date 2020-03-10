//@flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardBorder, Line, ButtonMarkDecision, Body, ButtonDeveloperSub, ButtonComments, Space } from '..'

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
    comments: number
  }
}

const CardIssueResponce = memo<Props>(({ obj }) => {
  const { row, align, commentStyle } = styles
  const { description, name, comments, uri } = obj
  return (
    <>
      <Line />
      <CardBorder>
        <View style={align}>
          <ButtonComments title={comments} viewStyle={commentStyle} />
          <ButtonMarkDecision />
        </View>
        <Space height={30} />
        <Body title={description} />
        <Space height={20} />
        <View style={row}>
          <ButtonDeveloperSub title={name} uri={uri} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssueResponce }
