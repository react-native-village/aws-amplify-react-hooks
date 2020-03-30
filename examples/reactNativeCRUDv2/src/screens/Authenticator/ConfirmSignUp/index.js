import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'

const ConfirmSignUp = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    setError('')
    try {
      const { code } = values
      const { email, password } = route.params
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
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            code: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Space height={180} />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={() => setFieldTouched('code')}
                placeholder="Insert code"
                touched={touched}
                errors={errors}
              />
              <ButtonLink title="Resend code?" onPress={_onResend} textStyle={{ alignSelf: 'center' }} />
              {error !== 'Forgot Password?' && <TextError title={error} />}
              <Button title="Confirm" disabled={!isValid} onPress={handleSubmit} formik />
              <Space height={50} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ConfirmSignUp }
