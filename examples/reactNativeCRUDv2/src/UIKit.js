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

const UIKit = () => {
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
          <H1 title="H1" textStyle={{ textAlign: 'center' }} />
          <Space height={1} />
          <H2 title="H2" />
          <Space height={5} />
          <H3 title="H3" />
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
          <Space height={5} />
          <Body title="body" />
          <Space height={10} />
          <Cost title="500" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} color={primary} />
          <Space height={30} />
          <ButtonStatusIssue title={`Closed ${34}`} color={secondary} />
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
          <ButtonDeveloperSub title={name.findName()} color={secondary} uri={image.avatar()} rate={random.number()} />
          <Space height={30} />
          <Rate title="2/433" />
          <Space height={30} />
          <Star star={bool} onPress={() => setBool(!bool)} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Tabs" />
          <Space height={30} />
          <TabDeveloper />
          <Space height={30} />
          <TabCompany />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Inputs" />
          <Space height={30} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => Alert.alert(JSON.stringify(values))}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required()
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
          <H0 title="Headers" />
          <Space height={30} />
          <Header iconLeft="angle-dobule-left" />
          <Space height={30} />
          <HeaderMaster user={userData} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Cards" />
          <Space height={30} />
          <Developer title={name.findName()} uri={image.avatar()} rate={1} />
          <Space height={30} />
          <CardInfo obj={cardInfo} />
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
      </ScrollView>
    </>
  )
}

export default UIKit
