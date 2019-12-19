// @flow
import React, { memo } from 'react'
import { CardBorder, H4 } from '..'

type Props = {
  cardinfo: {
    position: string,
    language: string,
    stack: string,
    experience: string
  }
}

const CardAbout = memo<Props>(({ title }) => {
  return (
    <>
      <CardBorder>
        <H4 title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
