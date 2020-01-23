// @flow
import React, { memo } from 'react'
import { CardBorder, H4, H5, Space, Cost } from '..'

type Props = {
  obj: {
    position: string,
    language: string,
    stack: string,
    experience: string,
    salary: number
  },
  bool: boolean
}

const CardInfo = memo<Props>(({ obj, bool = true }) => {
  const { position, language, stack, experience, salary } = obj
  const info = (
    <>
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
      <Space height={10} />
      <H5 title="salary" />
      <Cost title={salary} />
    </>
  )

  return <>{bool ? <CardBorder>{info}</CardBorder> : info}</>
})

export { CardInfo }
