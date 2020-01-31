//@flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardBorder, Line, ButtonMarkDecision, H4, ButtonDeveloperSub, Comments, Space } from '..'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  align: {
    alignItems: 'flex-end'
  }
})

type Props = {
  obj: {
    description: string,
    name: string,
    comments: number
  }
}

const CardIssueResponce = memo<Props>(({ obj }) => {
  const { row, align } = styles
  const { description, name, comments } = obj
  return (
    <>
      <Line />
      <CardBorder>
        <View style={align}>
          <ButtonMarkDecision />
        </View>
        <Space height={30} />
        <H4 title={description} />
        <Space height={20} />
        <View style={row}>
          <ButtonDeveloperSub title={name} />
          <Comments title={comments} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssueResponce }
