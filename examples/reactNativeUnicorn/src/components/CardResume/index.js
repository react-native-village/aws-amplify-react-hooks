// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, CardBorder, CardInfo, H2, Space, Star, Rate } from '..'

type Props = {
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
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const CardResume = memo<Props>(({ obj, obj2 }) => {
  const { title, rate, avatar } = obj
  const { container } = styles
  const [star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <H2 title={title} />
          <Star bool={star} onPress={() => setStar(!star)} />
        </View>
        <Space height={20} />
        <Avatar uri={avatar} size="large" />
        <Space height={20} />
        <Rate title={rate} />
        <Space height={20} />
        <CardInfo obj={obj2} bool={false} />
      </CardBorder>
    </>
  )
})

export { CardResume }
