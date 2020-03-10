// @flow
import React, { memo } from 'react'
import { CardBorder, Line, ButtonDeveloperSub, Space, Body } from '..'

type Props = {
  obj: {
    name: string,
    description: string,
    uri: string
  }
}

const CardIssueResponceSub = memo<Props>(({ obj }) => {
  const { name, description, uri } = obj
  return (
    <>
      <Line />
      <CardBorder>
        <Body title={description} />
        <Space height={30} />
        <ButtonDeveloperSub title={name} uri={uri} />
      </CardBorder>
    </>
  )
})

export { CardIssueResponceSub }
