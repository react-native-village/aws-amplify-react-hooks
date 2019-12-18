import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { CardJob } from './components'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black'
  },
  footer: {
    color: 'white',
    fontSize: 42,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center'
  }
})

const item = {
  position: 'developer',
  description: 'rn developer ASAP',
  rate: '3000',
  owner: 'ReactNative Company'
}

const App = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <CardJob item={item} />
        <Text style={styles.footer}>тест</Text>
      </ScrollView>
    </>
  )
}

export default App
