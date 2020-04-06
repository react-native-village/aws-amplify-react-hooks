// @flow
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import faker from 'faker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Avatar,
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  Body,
  Space,
  Developer,
  CardIssueResponceSub,
  CardIssue,
  CardIssueResponce,
  CardContacts,
  CardVacancies,
  CardAbout,
  CardInfo,
  CardCareer,
  CardResume,
  CardEducation,
  Cost,
  Header,
  HeaderMaster,
  Button,
  ButtonStatusIssue,
  ButtonCircle,
  ButtonText,
  ButtonLink,
  ButtonDeveloperSub,
  ButtonMarkDecision,
  ButtonComments,
  IconCircle,
  Rate,
  Star,
  Input,
  TabDeveloper,
  TabCompany
} from 'react-native-unicorn-uikit'
import {
  userData,
  cardCareer,
  cardContacts,
  cardEducation,
  cardIssueResponce,
  cardVacancies,
  cardIssue,
  cardResume,
  cardInfo
} from './data'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const DataStore = () => {
  const { scrollView } = styles
  const {
    colors: { backgroundColor, primary, secondary }
  } = useTheme()
  const [bool, setBool] = useState(false)
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <H0 title="Avatars" />
        </View>
      </ScrollView>
    </>
  )
}

export default DataStore
