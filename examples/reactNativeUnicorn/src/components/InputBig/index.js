// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import t from 'tcomb-form-native'
import { W, BLUE, PINK, DISABLED_COLOR } from '../constants'

const Form = t.form.Form // eslint-disable-line

const styles = StyleSheet.create({
  container: {
    borderBottomColor: BLUE,
    width: W - 40,
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  input: {
    height: 100,
    color: PINK,
    top: 38,
    fontFamily: '3270Narrow',
    fontSize: 17,
    justifyContent: 'center'
  }
})

type InputBigT = {
  value: string,
  onChange: Function,
  placeholder: string
}

const InputBig = memo<InputBigT>(({ onChange, value, placeholder = 'description' }) => {
  const [height, setHeight] = useState(100)
  const { container, input } = styles

  return (
    <View style={[container, { height: height + 50 }]}>
      <TextInput
        value={value}
        multiline
        style={[input, { height }]}
        placeholderTextColor={DISABLED_COLOR}
        placeholder={placeholder}
        onChange={onChange}
        onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
      />
    </View>
  )
})

export { InputBig }
