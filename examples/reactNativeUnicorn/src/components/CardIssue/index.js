//@flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonDeveloperSub, CardBorder, Comments, H2, H4, Space } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
        <H2 title={title} viewStyle={{ marginTop: 25 }} />
        <Space height={20} />
        <H4 title={description} />
        <Space height={30} />
        <View style={container}>
          <ButtonDeveloperSub title={name} />
          <Comments title={comments} viewStyle={{ paddingLeft: 5 }} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssue }
