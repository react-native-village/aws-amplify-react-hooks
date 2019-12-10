![Cover](https://github.com/react-native-village/aws-amplify-react-hooks/blob/master/aws-amplify-react-hooks.png?raw=true)

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

[AmplifyProvider](https://github.com/react-native-village/aws-amplify-react-hooks#amplifyprovider)

[useQuery](https://github.com/react-native-village/aws-amplify-react-hooks#usequery)

[useMutation](https://github.com/react-native-village/aws-amplify-react-hooks#usemutation)

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
```javascript
const { 
  data: Array<mixed>,
  loading: string,
  error: string,
  fetchMore: function
} = useQuery(query {}, options: { variables: {[key: string]: any }}, queryData: Array<string>)
```
  
`query` - The first argument is a GraphQL query READ operation, the second is a CREATE subscription operation, the third is an UPDATE subscription operation and the fourth is a DELETE subscription operation.

`option` - An object containing all the variables that your request should fulfill.

`queryData` - An array of GraphQL operation names in the READ, CREATE, UPDATE, DELETE sequence.

`data` — The returned data array.

`loading` - Loading indicator.

`error` - Error.
  
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
import { View, Text, FlatList } from 'react-native'
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
  
  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error! {error}</Text>
  }

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
```javascript
import React, { useState } from 'react' 
import { View, Text, Button } from 'react-native'

import { useMutation } from 'aws-amplify-react-hooks' 
import { createJob, updateJob, deleteJob } from '../../graphql/mutations' // from Amplify autogenerate file

const Jobs = () => {  
  const [input, setJob] = useState({
    position: '',
    rate: '',
    description: ''
  })

  const [setCreate, setUpdate, setDelete, { loading, error }] = useMutation(input)

  const onCreate = async () => {
    const obj = await setCreate(createJob)
    console.log('obj', obj)
  }
  const onUpdate = async () => (await setUpdate(updateJob))
  const onDelete = async () => (await setDelete(deleteJob))
  
  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error! {error}</Text>
  }
  
  return (
    <>
      <Button title="CREATE" onPress={onCreate} />
    </>
  )
}

``` 

