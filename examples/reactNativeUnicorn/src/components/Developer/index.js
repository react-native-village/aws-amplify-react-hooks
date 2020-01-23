// @flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, H2, H4 } from '..'
import type {ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  h2: {
    marginLeft: 15,
    marginRight: 15
  }
})

type Props = {
  title: string,
  viewStyle: ViewStyleProp
}

const Developer = memo<Props>(({ title, viewStyle}) => {
  const { container, h2 } = styles
  return (
    <View styles={[container, viewStyle]}>
      <Avatar uri={'https://i.picsum.photos/id/180/200/200.jpg'} size="medium"/>
      <H2 title={title} textStyle={h2}/>
      <H4 title="1/123"/>
    </View>
  )
})

export { Developer }
