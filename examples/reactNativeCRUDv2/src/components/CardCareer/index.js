// @flow
import React, { memo } from 'react'
import { CardBorder, H8, H7, Body, Space } from '..'

type CardCareerT = {
  obj: {
    institution: string,
    start: string,
    finish: string,
    description: string,
    link: string
  }
}

const CardCareer = memo<CardCareerT>(({ obj }) => {
  const { institution, start, finish, description } = obj
  return (
    <>
      <CardBorder>
        <H7 title={institution} textStyle={{ textAlign: 'left' }} />
        <Space height={10} />
        <H8 title={`[${start} - ${finish}]`} />
        <Space height={5} />
        <Body title={description} />
      </CardBorder>
    </>
  )
})

export { CardCareer }
