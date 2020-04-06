// @flow
import React, { memo } from 'react'
import { CardBorder, ButtonLink, H8, H7, Body, Space } from '..'

type CardEducationT = {
  obj: {
    institution: string,
    start: string,
    finish: string,
    description: string,
    link: string
  }
}

const CardEducation = memo<CardEducationT>(({ obj }) => {
  const { institution, start, finish, description, link } = obj
  return (
    <>
      <CardBorder>
        <H7 title={institution} textStyle={{ textAlign: 'left' }} />
        <Space height={10} />
        <H8 title={`[${start} - ${finish}]`} />
        <Space height={5} />
        <Body title={description} />
        <Space height={10} />
        <ButtonLink title={link} />
      </CardBorder>
    </>
  )
})

export { CardEducation }
