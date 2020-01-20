// @flow
import React, { memo } from 'react'
import { CardBorder, H4 } from '..'

type Props = {
  title: string
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
