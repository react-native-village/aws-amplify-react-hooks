import React, { useState, useEffect, useRef } from 'react'
import { AppContainer, Input, Space, Button, Header, ButtonLink } from 'react-native-unicorn-uikit'
import { DataStore } from '@aws-amplify/datastore'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Job } from '../../models'
import { goBack } from '../../constants'

const JobAdd = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [check, setOwner] = useState(false)
  const [error, setError] = useState('')

  const [input, setJob] = useState({
    id: '',
    position: '',
    rate: 0,
    description: ''
  })

  const formikRef = useRef()

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setOwner(true)
      setJob(obj)
      const { setFieldValue } = formikRef.current
      const { position, rate, description } = obj
      setFieldValue('position', position)
      setFieldValue('rate', rate)
      setFieldValue('description', description)
    }
  }, [route.params])

  const createJob = async (values) => (await DataStore.save(new Job({ ...values }))) && goBack(navigation)()

  const updateJob = async ({ position, rate, description }) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Job, input.id)
      const update = await DataStore.save(
        Job.copyOf(original, (updated) => {
          updated.position = position
          updated.rate = rate
          updated.description = description
        })
      )
      update && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const deleteJob = async () => {
    try {
      setLoading(true)
      const job = await DataStore.query(Job, input.id)
      const del = await DataStore.delete(job)
      del && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} error={error}>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" />
      <Space height={20} />
      <Formik
        innerRef={formikRef}
        initialValues={input}
        onSubmit={(values) => (check ? updateJob(values) : createJob(values))}
        validationSchema={Yup.object().shape({
          position: Yup.string().min(3).required(),
          rate: Yup.number().min(3).required(),
          description: Yup.string().min(3).required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <>
            <Input
              name="position"
              value={values.position}
              onChangeText={handleChange('position')}
              onBlur={() => setFieldTouched('position')}
              placeholder="Position"
              touched={touched}
              errors={errors}
            />
            <Input
              name="rate"
              keyboardType="numeric"
              value={`${values.rate}`}
              onChangeText={handleChange('rate')}
              onBlur={() => setFieldTouched('rate')}
              placeholder="Rate"
              touched={touched}
              errors={errors}
            />
            <Input
              name="description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              touched={touched}
              errors={errors}
              multiline
              numberOfLines={5}
            />
            <Space height={40} />
            <Button title={check ? 'Update' : 'Create'} disabled={!isValid} onPress={handleSubmit} formik />
            {check && (
              <>
                <Space height={10} />
                <ButtonLink title="or" textStyle={{ alignSelf: 'center' }} />
                <Space height={15} />
                <Button title="DELETE" onPress={deleteJob} cancel />
              </>
            )}
          </>
        )}
      </Formik>
      <Space height={100} />
    </AppContainer>
  )
}

export { JobAdd }
