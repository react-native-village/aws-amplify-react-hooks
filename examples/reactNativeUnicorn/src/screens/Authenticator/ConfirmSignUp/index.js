import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import t from 'tcomb-form-native'
import { AppContainer, Button, Space, TextLink, TextError } from '../../../components'
import { structConfirmSignUp, options } from '../Form'
import { onScreen, goBack } from '../../../constants'

const Form = t.form.Form // eslint-disable-line

const ConfirmSignUp = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    code: ''
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
        const { code } = userInfo
        const { email, password } = navigation.state.params
        await Auth.confirmSignUp(email, code, { forceAliasCreation: true })
        const user = await Auth.signIn(email, password)
        user && onScreen('USER', navigation)()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(err.message)
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
    }
  }

  const _onResend = async () => {
    try {
      const { email } = navigation.state.params
      await Auth.resendSignUp(email)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} message={error} loading={loading}>
        <Space height={20} />
        <Form
          ref={registerForm}
          type={structConfirmSignUp}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={10} />
        <TextLink title="Resend code?" onPress={_onResend} />
        {error !== 'Forgot Password?' && <TextError title={error} />}
        <Space height={50} />
        <Button title="Confirm" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { ConfirmSignUp }
