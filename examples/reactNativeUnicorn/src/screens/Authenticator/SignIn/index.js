import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import t from 'tcomb-form-native'
import { AppContainer, Button, Space, TextLink, TextError } from '../../../components'
import { structSignIn, options } from '../Form'
import { onScreen, goBack } from '../../../constants'

const Form = t.form.Form // eslint-disable-line

const SignIn = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    const validate = registerForm.current.getValue()
    if (validate) {
      setLoading(true)
      setError('')
      try {
        const { email, password } = userInfo
        const user = await Auth.signIn(email, password)
        await Keychain.setInternetCredentials('auth', email, password)
        user && onScreen('USER', navigation)()
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

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading}>
        <Space height={70} />
        <Form
          ref={registerForm}
          type={structSignIn}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={10} />
        {error !== 'Forgot Password?' && <TextError title={error} />}
        {error === 'Forgot Password?' && (
          <TextLink title={error} onPress={onScreen('FORGOT', navigation, userInfo.email)} />
        )}
        <Space height={50} />
        <Button title="Sign In" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { SignIn }
