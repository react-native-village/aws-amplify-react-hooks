import React, { useEffect, useState } from 'react'
import { AppContainer, Button, Space, TextLink } from 'react-native-unicorn-uikit'
import { Card } from '../../components'
import { goBack, PINK } from '../../constants'
import { createJob, updateJob, deleteJob } from '../../graphql/mutations'

const JobAdd = ({ navigation }) => {
  return (
    <AppContainer onPress={goBack(navigation)}>
      <Card>
        <Space height={40} />
        <Button title="DONE" onPress={() => {}} />
        <Space />
      </Card>
    </AppContainer>
  )
}

export { JobAdd }
