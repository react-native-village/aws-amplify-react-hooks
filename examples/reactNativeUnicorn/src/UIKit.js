// @flow
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import faker from 'faker'
import {
  Header,
  HeaderMaster,
  Rate,
  ButtonMarkDecision,
  ButtonComments,
  ButtonLink,
  Input,
  Background,
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  CardContacts,
  CardVacancies,
  CardAbout,
  CardInfo,
  CardCareer,
  CardResume,
  CardEducation,
  Space,
  Star,
  Avatar,
  ProfileInfo,
  Dollar,
  Line,
  Developer,
  IconCircle,
  Button,
  ButtonCircle,
  ButtonText,
  ButtonStatusIssue,
  ButtonDeveloperSub,
  Cost,
  Plus,
  CardIssueResponceSub,
  CardIssue,
  CardIssueResponce,
  TabCompany,
  TabDeveloper
} from './components'
import { Formik } from 'formik'
import * as Yup from 'yup'
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
import { PINK, BLUE } from './components/constants'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

// eslint-disable-next-line
const res = n =>
  new Array(n).fill().map(() => {
    const { random, image } = faker
    return {
      id: random.uuid(),
      avatar: image.avatar(),
      browsed: random.boolean()
    }
  })

//const array = res(10)

const UIKit = () => {
  const {
    colors: { backgroundColor }
  } = useTheme()
  const { scrollView } = styles
  const [bool, setBool] = useState(false)
  const _onPress = () => console.log('click')
  const [userInfo, setInfo] = useState({
    email: ''
  })

  const { image, name, lorem } = faker
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <H0 title="Cards" />
          <Space height={30} />
          <Developer title={name.findName()} uri={image.avatar()} />
          <Space height={30} />
          <CardVacancies obj={cardVacancies} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} bool />
          <Space height={30} />
          <CardIssue obj={cardIssue} />
          <Space height={30} />
          <CardIssueResponceSub obj={cardIssueResponce} />
          <Space height={30} />
          <CardIssueResponce obj={cardIssueResponce} />
          <Space height={30} />
          <CardContacts obj={cardContacts} />
          <Space height={30} />
          <CardCareer obj={cardCareer} />
          <Space height={30} />
          <CardEducation obj={cardEducation} />
          <Space height={30} />
          <CardAbout title={lorem.paragraph()} />
          <Space height={60} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Headers" />
          <Space height={30} />
          <Header iconLeft="angle-dobule-left" />
          <Space height={30} />
          <HeaderMaster user={userData} />
          <Space height={60} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Tabs" />
          <Space height={30} />
          <TabDeveloper />
          <Space height={30} />
          <TabCompany />
          <Space height={60} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Inputs" />
          <Space height={30} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required(),
              password: Yup.string()
                .min(6)
                .required()
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
              <>
                <Input
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder="E-mail"
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Password"
                  touched={touched}
                  errors={errors}
                />
                <Space height={40} />
                <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} formik />
              </>
            )}
          </Formik>
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" textStyle={{ fontSize: 30 }} onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" textStyle={{ fontSize: 30 }} cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} color={PINK} />
          <Space height={20} />
          <ButtonStatusIssue title={`Closed ${34}`} color={BLUE} />
          <Space height={30} />
          <ButtonCircle title="Press me" />
          <Space height={30} />
          <ButtonText title="forgot password?" />
          <Space height={30} />
          <ButtonLink title="link" />
          <Space height={30} />
          <ButtonMarkDecision />
          <Space height={30} />
          <IconCircle name=":thought_balloon:" />
          <Space height={10} />
          <IconCircle name=":telephone_receiver:" />
          <Space height={10} />
          <IconCircle name=":loud_sound:" />
          <Space height={10} />
          <IconCircle name=":thought_balloon:" />
          <Space height={30} />
          <ButtonComments title={3} />
          <Space height={30} />
          <ButtonDeveloperSub title={name.findName()} color={BLUE} uri={image.avatar()} />
          <Space height={30} />
          <Rate title="2/433" />
          <Space height={30} />
          <Star star={bool} onPress={() => setBool(!bool)} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Avatars" />
          <Space height={30} />
          <Avatar uri={image.avatar()} size="xLarge" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="large" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="medium" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="small" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="FONTS" />
          <Space height={10} />
          <H0 title="H0" />
          <Space height={1} />
          <H1 title="H1" />
          <Space height={1} />
          <H2 title="H2" />
          <Space height={5} />
          <H3 title="H3" textStyle={{ width: 25 }} />
          <Space height={5} />
          <H4 title="H4" />
          <Space height={1} />
          <H5 title="H5" />
          <Space height={5} />
          <H6 title="H6" />
          <Space height={5} />
          <H7 title="H7" />
          <Space height={5} />
          <H8 title="H8" />
          <Space height={90} />
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
