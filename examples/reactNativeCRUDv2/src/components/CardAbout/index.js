// @flow
import React, { memo } from 'react'
import { CardBorder, Body } from '..'

type CardT = {
  title: string
}

const CardAbout = memo<CardT>(({ title }) => {
  return (
    <>
      <CardBorder>
        <Body title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
