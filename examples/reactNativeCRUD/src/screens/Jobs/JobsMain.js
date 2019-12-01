// @flow
import React from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { listJobs } from '../../graphql/queries'
import { AppContainer, CardJob } from '../../components'
import { onScreen, BG } from '../../constants'
//import { useQuery, getNames } from 'aws-amplify-react-hooks'
//import { useQuery, getNames } from '../../../crud'
import { useQuery, getNames } from 'aws-amplify-react-hooks'
import { onCreateJob, onUpdateJob, onDeleteJob } from '../../graphql/subscriptions'

const JobsMain = ({ navigation }) => {
  const owner = Auth.user.attributes.sub
  const { data, loading, error, fetchMore } = useQuery(
    {
      listJobs,
      onCreateJob,
      onUpdateJob,
      onDeleteJob
    },
    {
      variables: { limit: 5 }
    },
    getNames({ listJobs, onCreateJob, onUpdateJob, onDeleteJob })
  )

  const _renderItem = ({ item }) => {
    const check = owner === item.owner
    return <CardJob item={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB', navigation, item)} />
  }

  const _keyExtractor = obj => obj.id.toString()

  return (
    <AppContainer
      flatlist
      message={error}
      loading={loading}
      iconRight="plus-a"
      colorLeft={BG}
      title=" "
      onPressRight={onScreen('JOB_ADD', navigation)}
    >
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
      />
    </AppContainer>
  )
}

export { JobsMain }
