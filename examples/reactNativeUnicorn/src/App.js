import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { H1, H2, H3, H4, H5, H6, H7, CardAbout, CardInfo, Space } from './components'
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

const cardinfo = {
  position: 'React-Native Developer, Front-end Developer',
  language: 'Java Script, Python',
  stack: 'React-Native, Apollo, GraphQl, AWS Amplify',
  experience: '5 years'
}

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
        <Space height={20} />
        <H4 title="H4 Text" />
        <Space height={20} />
        <H5 title="H5 Text" />
        <Space height={20} />
        <H6 title="H6 Text" />
        <Space height={20} />
        <H7 title="H7 Text" />
        <Space height={40} />
        <CardAbout title="For 3 years our company has been engaged in financial technologies in online games, in particular in CS:GO and Dota 2. A significant number of users from all over the world use our platform to quickly and safely exchange, buy or sell their in-game items." />
        <Space height={30} />
        <CardInfo cardinfo={cardinfo} />
        <Space height={100} />
      </ScrollView>
    </>
  )
}

export default App
