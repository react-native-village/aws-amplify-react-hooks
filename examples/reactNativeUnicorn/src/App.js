// @flow
import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  CardContacts,
  CardVacancies,
  CardAbout,
  CardInfo,
  CardCareer,
  CardResume,
  Space,
  Star,
  Avatar,
  Dollar,
  Line,
  IconCircle
} from './components'
import { BG } from './constants'
import { cardinfo, cardabout, cardcontacts, cardvacancies, cardcareer, cardresume } from './data'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: BG,
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const App = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Dollar />
        <Line />
        <IconCircle />
        <Space height={30} />
        <CardResume obj={cardresume} obj2={cardinfo} />
        <Space height={30} />
        <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="large" />
        <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="medium" />
        <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="small" />
        <Space height={20} />
        <Star bool={false} />
        <Space height={20} />
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
        <CardCareer obj={cardcareer} />
        <Space height={30} />
        <CardVacancies obj={cardvacancies} />
        <Space height={30} />
        <CardContacts obj={cardcontacts} />
        <Space height={30} />
        <CardAbout title={cardabout} />
        <Space height={30} />
        <CardInfo obj={cardinfo} />
        <Space height={100} />
      </ScrollView>
    </>
  )
}

export default App
