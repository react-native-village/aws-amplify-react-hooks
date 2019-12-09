import React, { useRef, useEffect, useState } from 'react'
import t from 'tcomb-form-native'
import { useMutation } from 'aws-amplify-react-hooks'
import { AppContainer, Card, Button, Space, TextLink } from '../../components'
import { structJob, options } from '../Authenticator/Form'
import { goBack, PINK } from '../../constants'
import { createJob, updateJob, deleteJob } from '../../graphql/mutations'

const Form = t.form.Form // eslint-disable-line

const JobAdd = ({ navigation }) => {
  const [check, setOwner] = useState(false)
  const [input, setJob] = useState({
    position: '',
    rate: '',
    description: ''
  })

  const onChange = item => setJob(item)

  useEffect(() => {
    const obj = navigation.state.params
    typeof obj !== 'undefined' && setOwner(true)
    setJob(obj)
  }, [navigation])

  const [create, update, del, { loading, error }] = useMutation(input)

  const onCreate = async () => (await create(createJob)) && goBack(navigation)()
  const onUpdate = async () => (await update(updateJob, input)) && goBack(navigation)()
  const onDelete = async () => (await del(deleteJob)) && goBack(navigation)()

  const registerForm = useRef('')
  return (
    <AppContainer loading={loading} message={error} title="Add" onPress={goBack(navigation)}>
      <Card>
        <Form ref={registerForm} type={structJob} options={options} value={input} onChange={text => onChange(text)} />
        <Space height={40} />
        <Button title="DONE" onPress={() => (check ? onUpdate() : onCreate())} />
        {check && (
          <>
            <TextLink title="or" />
            <Space height={10} />
            <Button title="DELETE" color={PINK} onPress={onDelete} />
          </>
        )}
        <Space />
      </Card>
    </AppContainer>
  )
}

export { JobAdd }
