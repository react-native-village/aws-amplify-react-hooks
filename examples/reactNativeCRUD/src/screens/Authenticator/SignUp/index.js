import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import t from 'tcomb-form-native'
import { AppContainer, Space, Button, TextError } from '../../../components'
import { structSignUp, options } from '../Form'
import { onScreen, goBack } from '../../../constants'

const Form = t.form.Form // eslint-disable-line

const SignUp = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    const { email, password, passwordConfirmation } = userInfo
    if (password !== passwordConfirmation) {
      setError('Passwords do not match!')
    } else {
      const validate = registerForm.current.getValue()
      if (validate) {
        setLoading(true)
        setError('')
        try {
          const user = await Auth.signUp(email, password)
          await Keychain.setInternetCredentials('auth', email, password)
          user && onScreen('CONFIRM_SIGN_UP', navigation, { email, password })()
          setLoading(false)
        } catch (err) {
          setLoading(false)
          if (err.code === 'UserNotConfirmedException') {
            setError('Account not verified yet')
          } else if (err.code === 'PasswordResetRequiredException') {
            setError('Existing user found. Please reset your password')
          } else if (err.code === 'NotAuthorizedException') {
            setError('Forgot Password?')
          } else if (err.code === 'UserNotFoundException') {
            setError('User does not exist!')
          } else {
            setError(err.code)
          }
        }
      } else {
        setError('Invalid Form')
      }
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading}>
        <Space height={60} />
        <Form
          ref={registerForm}
          type={structSignUp}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={10} />
        {error !== '' && <TextError title={error} />}
        <Space height={50} />
        <Button title="Sign Up" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { SignUp }
