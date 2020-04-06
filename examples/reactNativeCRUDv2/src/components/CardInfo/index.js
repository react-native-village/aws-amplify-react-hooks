// @flow
import React, { memo } from 'react'
import { CardBorder, Body, H7, Space } from '..'

type CardInfoT = {
  obj: {
    position: string,
    language: string,
    stack: string,
    experience: string,
    salary: number
  },
  bool: boolean
}

const CardInfo = memo<CardInfoT>(({ obj, bool = true }) => {
  const { position, language, stack, experience, salary } = obj
  const info = (
    <>
      <H7 title="Position" />
      <Body title={position} />
      <Space height={10} />
      <H7 title="Languages" />
      <Body title={language} />
      <Space height={10} />
      <H7 title="Stack" />
      <Body title={stack} />
      <Space height={10} />
      <H7 title="Experience" />
      <Body title={experience} />
      <Space height={10} />
      <H7 title="Salary" />
      <Body title={`$ ${salary}`} />
    </>
  )

  return <>{bool ? <CardBorder>{info}</CardBorder> : info}</>
})

export { CardInfo }
