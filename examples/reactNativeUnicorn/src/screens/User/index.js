import React, { useState } from 'react'
import { Image } from 'react-native'
import { Auth, Storage, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import ImagePicker from 'react-native-image-crop-picker'
import { createUser as CreateUser } from '../../graphql/mutations'
import { AppContainer, Button } from '../../components'
import { goHome } from '../../constants'
import config from '../../../aws-exports'

const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = config

const User = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ava, setAva] = useState({})

  const createUser = async (path, filename, mime) => {
    const username = Auth.user.attributes.sub
    const key = `${username}${filename}`
    const fileForUpload = {
      bucket,
      key,
      region
    }
    const inputData = {
      username,
      avatar: fileForUpload,
      firstName: 'Play',
      lastName: 'Ra',
      description: 'test',
      location: 'Moscow',
      web: 'www.test.ru',
      phone: '8999999393'
    }

    try {
      const response = await fetch(path)
      const blob = await response.blob()
      await Storage.put(key, blob, { contentType: mime })
      const user = await API.graphql(graphqlOperation(CreateUser, { input: inputData }))
      console.log('user', user)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  const pickAva = async (cropping = true, circular = true) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping,
        cropperCircleOverlay: circular,
        compressImageMaxWidth: 1000,
        compressImageMaxHeight: 1000,
        compressImageQuality: 1,
        compressVideoPreset: 'MediumQuality',
        includeExif: true
      })
      const { filename, path, width, height, mime } = image
      setAva({ uri: path, width, height, mime })
      createUser(path, filename, mime)
    } catch (e) {
      console.log('e', e) // eslint-disable-line
    }
  }

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
      <Image
        style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 50, alignSelf: 'center', margin: 50 }}
        source={ava}
      />
      <Button title="Avatar" onPress={() => pickAva()} />
      <Button title="Sign Out" onPress={_onPress} />
    </AppContainer>
  )
}

export { User }
