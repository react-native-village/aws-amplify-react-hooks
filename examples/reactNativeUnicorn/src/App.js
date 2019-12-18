import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'

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

const App = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.footer}>тест</Text>
      </ScrollView>
    </>
  )
}

export default App
