import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}

//import { AmplifyProvider, useQuery, useMutation, getNames } from './src'

//export { AmplifyProvider, useQuery, useMutation, getNames }
