import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Button, Space, H6 } from 'react-native-unicorn-uikit'
import { AppContainer } from '../../../components'
import { onScreen } from '../../../constants'

const Hello = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const key = async () => {
      try {
        const credentials = await Keychain.getInternetCredentials('auth')

        if (credentials) {
          const { username, password } = credentials
          const user = await Auth.signIn(username, password)
          setLoading(false)
          user && onScreen('USER', navigation)()
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log('error', err) // eslint-disable-line
        setLoading(false)
      }
    }
    key()
  }, []) // eslint-disable-line
  return (
    <AppContainer loading={loading}>
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <Space height={10} />
      <H6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
