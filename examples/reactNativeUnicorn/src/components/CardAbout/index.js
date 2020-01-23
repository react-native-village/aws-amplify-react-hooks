// @flow
import React, { memo } from 'react'
import { CardBorder, H4 } from '..'

type CardT = {
  title: string
}

const CardAbout = memo<CardT>(({ title }) => {
  return (
    <>
      <CardBorder>
        <H4 title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
