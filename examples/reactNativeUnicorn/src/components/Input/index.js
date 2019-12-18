import React, { memo } from 'react'
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    margin: 5,
    backgroundColor: '#ddd'
  }
})

const Input = memo(({ value, placeholder, secureTextEntry, onChange, autoCapitalize = '' }) => {
  const { container } = styles
  return (
    <KeyboardAvoidingView behavior="padding">
      <TextInput
        placeholder={placeholder}
        value={value}
        autoCapitalize={autoCapitalize}
        style={container}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChange(text)}
      />
    </KeyboardAvoidingView>
  )
})

export { Input }
