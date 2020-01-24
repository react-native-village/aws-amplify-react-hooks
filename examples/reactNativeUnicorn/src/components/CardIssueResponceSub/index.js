// @flow
import React, { memo } from 'react'
import { H4, CardBorder, Line, ButtonDeveloperSub, Space } from '..'

type Props = {
  obj: {
    name: string,
    description: string
  }
}

const CardIssueResponceSub = memo<Props>(({ obj }) => {
  const { name, description } = obj
  return (
    <>
      <Line/>
      <CardBorder>
        <H4 title={description}/>
        <Space height={30}/>
        <ButtonDeveloperSub title={name}/>
      </CardBorder>
    </>
  )
})

export { CardIssueResponceSub }
