import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Space, Button, Input, TextError } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    const { email, password, passwordConfirmation } = values
    if (password !== passwordConfirmation) {
      setError('Passwords do not match!')
    } else {
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
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading}>
        <Space height={80} />
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
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
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={() => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              <Space height={30} />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Button title="Sign Up" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignUp }
