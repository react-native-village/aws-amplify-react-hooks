import React from 'react'
import { AppContainer } from 'react-native-unicorn-uikit'
import { CardJobDetail } from '../../components'
import { goBack } from '../../constants'

const JobDetail = ({ navigation }) => (
  <AppContainer title=" " onPress={goBack(navigation)}>
    <CardJobDetail item={navigation.state.params} />
  </AppContainer>
)

export { JobDetail }
