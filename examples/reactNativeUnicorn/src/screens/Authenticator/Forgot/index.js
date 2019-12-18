import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import t from 'tcomb-form-native'
import { AppContainer, Button, Space } from '../../../components'
import { structForgot, options } from '../Form'
import { onScreen, goBack } from '../../../constants'

// Fixme
const Form = t.form.Form // eslint-disable-line

const Forgot = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: navigation.state.params
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    setLoading(true)
    try {
      const { email } = userInfo
      const user = await Auth.forgotPassword(email)
      user && onScreen('FORGOT_PASSWORD_SUBMIT', navigation, email)()
      setLoading(false)
    } catch (err) {
      setError(error)
    }
  }

  return (
    <>
      <AppContainer title="Forgot" onPress={goBack(navigation)} message={error} loading={loading}>
        <Space height={130} />
        <Form
          ref={registerForm}
          type={structForgot}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={50} />
        <Button title="Sign In" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { Forgot }
