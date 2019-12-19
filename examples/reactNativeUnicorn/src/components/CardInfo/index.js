// @flow
import React, { memo } from 'react'
import { CardBorder, H4, H5, Space } from '..'

type Props = {
  cardinfo: {
    position: string,
    language: string,
    stack: string,
    experience: string
  }
}

const CardInfo = memo<Props>(({ cardinfo }) => {
  const { position, language, stack, experience } = cardinfo
  return (
    <>
      <CardBorder>
        <H5 title="position" />
        <H4 title={position} />
        <Space height={10} />
        <H5 title="languages" />
        <H4 title={language} />
        <Space height={10} />
        <H5 title="stack" />
        <H4 title={stack} />
        <Space height={10} />
        <H5 title="experience" />
        <H4 title={experience} />
      </CardBorder>
    </>
  )
})

export { CardInfo }
