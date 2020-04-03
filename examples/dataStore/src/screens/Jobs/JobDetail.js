import React from 'react'
import { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'
import { goBack } from '../../constants'

const JobDetail = ({ route, navigation }) => {
  return (
    <AppContainer>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" />
      <Space height={10} />
      <CardVacancies obj={route.params} detail />
    </AppContainer>
  )
}

export { JobDetail }
