import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { H1, H2, H3, Space } from './components'
//import { CardJob, H1, H2, Space } from './components'
import { WHITE, BG } from './constants'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: BG,
    paddingTop: 65,
    paddingHorizontal: 15
  },
  footer: {
    color: WHITE,
    fontSize: 42,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center'
  }
})

// const item = {
//   position: 'developer',
//   description: 'rn developer ASAP',
//   rate: '3000',
//   owner: 'ReactNative Company'
// }

const App = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        {/*<CardJob item={item} />*/}
        <H1 title="H1 Text" />
        <Space height={20} />
        <H2 title="H2 Text" />
        <Space height={20} />
        <H3 title="H3 Text" />
      </ScrollView>
    </>
  )
}

export default App
