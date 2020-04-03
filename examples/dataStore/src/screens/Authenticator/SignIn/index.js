import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const SignIn = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    setError('')
    try {
      const { email, password } = values
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
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading}>
        <Space height={140} />
        <Formik
          initialValues={{ email: 'raoffonom@icloud.com', password: 'qwerty123' }}
          onSubmit={(values) => _onPress(values) && setUserInfo(values.email)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              {error !== 'Forgot Password?' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              {error === 'Forgot Password?' && (
                <ButtonLink
                  title={error}
                  onPress={onScreen('FORGOT', navigation, userInfo)}
                  textStyle={{ alignSelf: 'center' }}
                />
              )}
              <Space height={30} />
              <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignIn }
