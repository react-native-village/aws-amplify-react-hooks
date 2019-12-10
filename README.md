# aws-amplify-react-hooks
AWS Amplify react &amp;&amp; react-native hooks

# Installation

`npm install aws-amplify-react-hooks`

Or if using [yarn](https://yarnpkg.com/en/)


`yarn add aws-amplify-react-hooks`

# Example

```bash
git clone git@github.com:react-native-village/aws-amplify-react-hooks.git
cd examples/reactNativeCRUD
yarn
react-native run-ios
react-native run-android
```

# API

AmplifyProvider
Usage
useQuery

## AmplifyProvider

Similar to
[ApolloProvider from react-apollo](https://www.apollographql.com/docs/react/essentials/get-started.html#creating-provider).
In order for this package to work, you need to wrap your component tree with
`AmplifyProvider` at an appropriate level, encapsulating all components which
will use hooks.

### Usage

```javascript
import React from 'react'
import { AmplifyProvider } from 'aws-amplify-react-hooks'  
import { Auth, API, graphqlOperation } from 'aws-amplify'

const client = {
  Auth,
  API,
  graphqlOperation
}

AmplifyProvider(client)

const App = () => (
  <AmplifyProvider client={client}>
    <AppNavigator />
  </AmplifyProviderc>
)

render(<App />, document.getElementById('root'))
```

## useQuery

Simple example
```javascript
import React from 'react'
import { View, Text } from 'react-native'
import { useQuery, getNames } from 'aws-amplify-react-hooks'
import { listJobs } from '../../graphql/queries' // from Amplify autogenerate file
import { onCreateJob, onUpdateJob, onDeleteJob } from '../../graphql/subscriptions' // from Amplify autogenerate file 


const Jobs = () => {
    const { data, loading, error } = useQuery(
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

  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error! {error}</Text>
  }

  return (
    <>
      {data.map(item => (
        <View key={item.id}>
          <Text>{item.position}</Text>
        </View>
      ))}
    </>
  )
}

```

Flatlist with pagination

```javascript
import React from 'react'
import { FlatList } from 'react-native'
import { useQuery, getNames } from 'aws-amplify-react-hooks'
import { listJobs } from '../../graphql/queries' // from Amplify autogenerate file
import { onCreateJob, onUpdateJob, onDeleteJob } from '../../graphql/subscriptions' // from Amplify autogenerate file

const Jobs = () => {
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
    return <Text>{item.position}</Text>
  }

  const _keyExtractor = obj => obj.id.toString()

  return (
    <>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
      />
    </>
  )
}

```

## useMutation

The `useMutation` returns a tuple with mutation function first and the result of mutation execution in second.
```javascript
import { Button } from 'react-native'
import { useMutation } from 'aws-amplify-react-hooks' 
import { createJob, updateJob, deleteJob } from '../../graphql/mutations' // from Amplify autogenerate file

const Jobs = () => {  
  const [setCreate, setUpdate, setDelete, { loading, error }] = useMutation(input)


  const onCreate = async () => {
    const obj = await setCreate(createJob)
    console.log('obj', obj)
  }
  const onUpdate = async () => (await setUpdate(updateJob))
  const onDelete = async () => (await setDelete(deleteJob))
  
  return (
    <>
      <Button title="CREATE" onPress={onCreate} />
    </>
  )
}

``` 
