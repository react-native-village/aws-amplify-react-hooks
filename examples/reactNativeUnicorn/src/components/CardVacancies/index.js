// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardBorder, H2, H4, Space, Star, Cost } from '..'

type Props = {
  obj: {
    title: string,
    description: string,
    company: string,
    cost: number
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const CardVacancies = memo<Props>(({ obj }) => {
  const { title, description, company, cost } = obj
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
        <H4 title={description} />
        <Space height={20} />
        <View style={container}>
          <H4 title={company} />
          <Cost title={cost} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
