// @flow
import React, { memo } from 'react'
import { CardBorder, H4, H5, H6, Space } from '..'

type Props = {
  cardinfo: {
    location: string,
    web: string,
    phone: string
  }
}

const CardContacts = memo<Props>(({ cardcontacts }) => {
  const { location, web, phone } = cardcontacts
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
