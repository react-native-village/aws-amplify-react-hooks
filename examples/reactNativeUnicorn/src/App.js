// @flow
import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import {
  Comments,
  Background,
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
  IconCircle,
  Button,
  ButtonStatusIssue,
  ButtonDeveloperSub,
  Cost
} from './components'
import { BG, PINK, BLUE } from './constants'
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
        <View style={{ alignItems: 'center' }}>
          <Button title="Buttons" />
          <Space height={30} />
          <Comments title={3} />
          <Space height={30} />
          <ButtonDeveloperSub title="Ivan Ivanov" color={BLUE} />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} color={PINK} />
          <Space height={20} />
          <ButtonStatusIssue title={`Closed ${34}`} color={BLUE} />
          <Space height={30} />
          <Star />
          <Space height={30} />
          <IconCircle />
          <Space height={30} />
          <Button title="Done" textStyle={{ fontSize: 30 }} />
          <Space height={20} />
          <Button title="Cancel" textStyle={{ fontSize: 30 }} color={PINK} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Avatar" />
          <Space height={30} />
          <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="large" />
          <Space height={20} />
          <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="medium" />
          <Space height={20} />
          <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="small" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Text" />
          <Space height={30} />
          <H1 title="H1" />
          <Space height={20} />
          <H2 title="H2" />
          <Space height={20} />
          <H3 title="H3" />
          <Space height={20} />
          <H4 title="H4" />
          <Space height={20} />
          <H5 title="H5" />
          <Space height={20} />
          <H6 title="H6" />
          <Space height={20} />
          <H7 title="H7" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Cards" />
          <Space height={30} />
          <CardResume obj={cardresume} obj2={cardinfo} />
          <Space height={30} />
          <CardCareer obj={cardcareer} />
          <Space height={30} />
          <CardVacancies obj={cardvacancies} />
          <Space height={30} />
          <CardContacts obj={cardcontacts} />
          <Space height={30} />
          <CardAbout title={cardabout} />
          <Space height={30} />
          <CardInfo obj={cardinfo} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Items" />
          <Space height={30} />
          <Cost title={5000} />
          <Space height={30} />
          <Dollar />
          <Space height={30} />
          <Line />
          <Space height={30} />
          <Background />
          <Space height={90} />
        </View>
      </ScrollView>
    </>
  )
}

export default App
