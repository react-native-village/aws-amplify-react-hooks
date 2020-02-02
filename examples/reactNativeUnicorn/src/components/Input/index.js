// @flow
import React, { memo, useRef } from 'react'
import t from 'tcomb-form-native'
import { options } from '../Form'

const Form = t.form.Form // eslint-disable-line

type InputT = {
  type: string,
  value: string,
  onChange: Function
}

const Input = memo<InputT>(({ type, onChange, value }) => {
  const ref = useRef('')

  return <Form ref={ref} type={type} options={options} onChange={onChange} value={value} />
})

export { Input }
