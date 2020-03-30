import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'

const Forgot = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    try {
      const { email } = values
      const user = await Auth.forgotPassword(email)
      user && onScreen('FORGOT_PASSWORD_SUBMIT', navigation, email)()
      setLoading(false)
    } catch (err) {
      setError(error)
    }
  }

  return (
    <>
      <AppContainer title="Forgot" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ email: route.params }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required()
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
              <Button title="Confirm" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { Forgot }
