import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { AppContainer, Button } from '../../../components'
import { goHome } from '../../../constants'

const User = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  })

  const _onPress = async () => {
    setLoading(true)
    try {
      await Auth.signOut()
      await Keychain.resetInternetCredentials('auth')
      goHome(navigation)()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AppContainer message={error} loading={loading}>
      <Button title="Sign Out" onPress={_onPress} />
    </AppContainer>
  )
}

export { User }
