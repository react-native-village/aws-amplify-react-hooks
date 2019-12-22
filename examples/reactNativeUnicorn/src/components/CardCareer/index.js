// @flow
import React, { memo } from 'react'
import { CardBorder, H4, H6, H3, H7, Space } from '..'

type Props = {
  cardinfo: {
    location: string,
    web: string,
    phone: string
  }
}

const CardCareer = memo<Props>(({ cardcareer }) => {
  const { institution, start, finish, description, link } = cardcareer
  return (
    <>
      <CardBorder>
        <H3 title={institution} />
        <H7 title={`[${start} - ${finish}]`} />
        <Space height={5} />
        <H4 title={description} />
        <Space height={5} />
        <H6 title={link} />
      </CardBorder>
    </>
  )
})

export { CardCareer }
