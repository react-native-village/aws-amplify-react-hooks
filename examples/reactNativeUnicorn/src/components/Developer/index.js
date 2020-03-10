// @flow
import React, { memo } from 'react'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { CardBorder, ButtonDeveloperSub } from '..'

type DeveloperT = {
  title: string,
  uri: string,
  rate: number,
  viewStyle: ViewStyleProp
}

const Developer = memo<DeveloperT>(({ title, uri, viewStyle, rate }) => {
  return (
    <CardBorder viewStyle={viewStyle}>
      <ButtonDeveloperSub title={title} uri={uri} rate={rate} />
    </CardBorder>
  )
})

export { Developer }
