// @flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardBorder, H2, H4, Space } from '..'

type Props = {
  cardinfo: {
    position: string,
    language: string,
    stack: string,
    experience: string
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const CardVacancies = memo<Props>(({ cardvacancies }) => {
  const { title, description, company, cost } = cardvacancies
  return (
    <>
      <CardBorder>
        <H2 title={title} />
        <Space height={20} />
        <H4 title={description} />
        <Space height={20} />
        <View style={styles.container}>
          <H4 title={company} />
          <H4 title={`$ ${cost}`} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
