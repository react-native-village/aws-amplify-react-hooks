// @flow
import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { H8 } from '..'

type ButtonTextT = {
  title: string,
  onPress: Function
}

const ButtonText = memo<ButtonTextT>(({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <H8 title={title} />
    </TouchableOpacity>
  )
})

export { ButtonText }
