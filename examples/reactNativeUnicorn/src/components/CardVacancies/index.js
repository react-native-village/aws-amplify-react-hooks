// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { CardBorder, H1, H7, Space, Star, Body } from '..'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

type CardVacanciesT = {
  obj: {
    title: string,
    description: string,
    company: string,
    cost: number
  },
  onPress: Function,
  detail: boolean
}

const CardVacancies = memo<CardVacanciesT>(({ obj, onPress, detail }) => {
  const { title, description, company, cost } = obj
  const { container } = styles
  const [star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <H1 title={title} textStyle={{ width: W - 110 }} numberOfLines={1} />
          <Star bool={star} onPress={() => setStar(!star)} />
        </View>
        <Space height={20} />
        <TouchableOpacity onPress={onPress}>
          {detail ? <Body title={description} /> : <Body numberOfLines={4} title={description} />}
        </TouchableOpacity>
        <Space height={20} />
        <View style={container}>
          <H7 title={company} textStyle={{ width: W - 140 }} numberOfLines={1} />
          <H7 title={`$ ${cost}`} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
