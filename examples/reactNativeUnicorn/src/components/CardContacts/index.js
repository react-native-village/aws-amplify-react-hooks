// @flow
import React, { memo } from 'react'
import { CardBorder, Body, H7, Space, ButtonLink } from '..'

type CardContactsT = {
  obj: {
    location: string,
    web: string,
    phone: string
  }
}

const CardContacts = memo<CardContactsT>(({ obj }) => {
  const { location, web, phone } = obj
  return (
    <>
      <CardBorder>
        <H7 title="Location" />
        <Space height={5} />
        <Body title={location} />
        <Space height={10} />
        <H7 title="Web" />
        <Space height={5} />
        <ButtonLink title={web} />
        <Space height={10} />
        <H7 title="Phone" />
        <Space height={2} />
        <Body title={phone} />
      </CardBorder>
    </>
  )
})

export { CardContacts }
