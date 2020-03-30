<<<<<<< HEAD
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
=======
// @flow
import React, { memo } from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    alignSelf: 'center',
    width: W - 30,
    height: 40,
    borderBottomWidth: 2
  },
  errorStyle: {
    fontSize: 14,
    color: 'red',
    paddingTop: 10
  }
})

type InputT = {
  name: string,
  value: string,
  placeholder: string,
  errors: {},
  onChangeText: Function,
  onBlur: Function,
  touched: {},
  keyboardType:  // eslint-disable-line
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password',
  secureTextEntry: boolean,
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'
}

const Input = memo<InputT>(
  ({
    name,
    value,
    errors,
    placeholder,
    onChangeText,
    onBlur,
    touched,
    secureTextEntry,
    keyboardType,
    autoCapitalize
  }) => {
    const { inputStyle, errorStyle } = styles

    const {
      dark,
      body: { fontFamily, fontSize },
      colors: { secondary, primary, placeholderTextColor }
    } = useTheme()

    const input = [
      inputStyle,
      { color: dark ? primary : secondary, borderBottomColor: dark ? primary : secondary, fontFamily, fontSize }
    ]

    const placeholderStyle = [
      inputStyle,
      { color: placeholderTextColor, borderBottomColor: dark ? primary : secondary, fontFamily, fontSize }
    ]

    return (
      <>
        <TextInput
          style={value.length === 0 ? placeholderStyle : input}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {touched[name] && errors[name] ? (
          <Text style={errorStyle}>{errors[name]}</Text>
        ) : (
          <Text style={errorStyle}>{'  '}</Text>
        )}
      </>
    )
  }
)
>>>>>>> ui-kit

export { Input }
