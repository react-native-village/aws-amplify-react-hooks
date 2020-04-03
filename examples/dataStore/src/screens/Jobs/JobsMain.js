import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import { AppContainer, Button, Space, TextLink } from 'react-native-unicorn-uikit'
import { DataStore } from '@aws-amplify/datastore'
import { Message } from '../../models'
import { Card } from '../../components'
import { goBack, PINK } from '../../constants'

const initialState = { color: 'black', title: '' }

const JobsMain = ({ navigation }) => {
  const [formState, updateFormState] = useState(initialState)
  const [messages, updateMessages] = useState([])

  const fetchMessages = async () => {
    const mess = await DataStore.query(Message)
    updateMessages(mess)
  }

  useEffect(() => {
    fetchMessages()
    const subscription = DataStore.observe(Message).subscribe(() => fetchMessages())
    return () => subscription.unsubscribe()
  }, [formState])

  const onChangeText = (key, value) => {
    updateFormState({ ...formState, [key]: value })
  }

  const createMessage = async () => {
    if (!formState.title) return
    await DataStore.save(new Message({ ...formState }))
    updateFormState(initialState)
  }

  return (
    <AppContainer onPress={goBack(navigation)}>
      {console.log('m', messages)}
      <TextInput onChangeText={(v) => onChangeText('title', v)} placeholder="Message title" value={formState.title} />
      <TextInput
        onChangeText={(v) => onChangeText('color', v)}
        placeholder="Message color"
        value={formState.color}
        autoCapitalize="none"
      />
      <Button onPress={createMessage} title="Create Message" />
      {messages.map(({ title, id }) => (
        <Text key={id}>{title}</Text>
      ))}
    </AppContainer>
  )
}

export { JobsMain }
