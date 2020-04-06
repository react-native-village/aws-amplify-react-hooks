import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { AppContainer, CardVacancies, Space } from 'react-native-unicorn-uikit'
import { DataStore } from '@aws-amplify/datastore'
import { Header } from '../../components'
import { Job } from '../../models'
import { goBack, onScreen } from '../../constants'

const JobsMain = ({ navigation }) => {
  const [data, updateJobs] = useState([])

  const fetchJobs = async () => {
    const mess = await DataStore.query(Job)
    updateJobs(mess)
  }

  useEffect(() => {
    fetchJobs()
    const subscription = DataStore.observe(Job).subscribe(() => fetchJobs())
    return () => {
      subscription.unsubscribe()
    }
  }, [data])

  const _renderItem = ({ item }) => {
    const owner = Auth.user.attributes.sub
    const check = owner === item.owner
    return (
      <>
        <CardVacancies obj={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB_DETAIL', navigation, item)} />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj) => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} flatlist>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPress={goBack(navigation)}
            onPressRight={onScreen('JOB_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight="plus-a"
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { JobsMain }
