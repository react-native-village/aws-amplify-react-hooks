// @flow
import React, { memo } from 'react'
import { CardBorder, ButtonDeveloperSub, Space, Body } from '..'

type Props = {
  obj: {
    name: string,
    description: string,
    uri: string,
    rate: number
  }
}

const CardIssueResponceSub = memo<Props>(({ obj }) => {
  const { name, description, uri, rate } = obj
  return (
    <>
      <CardBorder border>
        <Body title={description} />
        <Space height={30} />
        <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
      </CardBorder>
    </>
  )
})

export { CardIssueResponceSub }
