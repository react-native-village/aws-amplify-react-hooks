// @flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, CardBorder, CardInfo, H1, Space, Star, Rate } from '..'

const styles = StyleSheet.create({
  starStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'flex-end'
  }
})

type CardResumeT = {
  obj: {
    title: string,
    avatar: string,
    rate: number,
    cost: number
  },
  obj2: {
    position: string,
    language: string,
    stack: string,
    experience: string
  },
  bool: boolean
}

const CardResume = memo<CardResumeT>(({ obj, obj2, bool = false }) => {
  const { title, rate, avatar } = obj
  const { starStyle } = styles
  const user = (
    <>
      <View style={starStyle}>
        <Star />
      </View>
      <Avatar uri={avatar} size="large" />
      <Space height={10} />
      <H1 title={title} textStyle={{ textAlign: 'center' }} />
      <Space height={20} />
      <Rate title={rate} />
      <Space height={20} />
    </>
  )
  return (
    <>
      <CardBorder>
        {bool && user}
        <CardInfo obj={obj2} bool={false} />
      </CardBorder>
    </>
  )
})

export { CardResume }
