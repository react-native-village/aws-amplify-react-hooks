//@flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonDeveloperSub, CardBorder, Comments, H2, H4, Space } from '..'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row'
  }
})

type Props = {
  obj: {
    title: string,
    description: string,
    name: string,
    comments: number
  }
}

const CardIssue = memo<Props>(({ obj }) => {
  const { container } = styles
  const { title, description, name, comments } = obj
  return (
    <>
      <CardBorder>
        <H2 title={title}/>
        <Space height={20}/>
        <H4 title={description}/>
        <Space height={30}/>
        <View style={container}>
          <ButtonDeveloperSub title={name}/>
          <Comments title={comments}/>
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssue }
