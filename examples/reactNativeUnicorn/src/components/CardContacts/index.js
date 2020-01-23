// @flow
import React, { memo } from 'react'
import { CardBorder, H4, H5, H6, Space } from '..'

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
        <H5 title="location" />
        <H4 title={location} />
        <Space height={10} />
        <H5 title="web" />
        <H6 title={web} />
        <Space height={10} />
        <H5 title="phone" />
        <H4 title={phone} />
      </CardBorder>
    </>
  )
})

export { CardContacts }
