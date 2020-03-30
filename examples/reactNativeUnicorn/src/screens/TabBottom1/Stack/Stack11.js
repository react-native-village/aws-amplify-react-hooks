// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, FlatList, Alert } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import faker from 'faker'
import { Input, Space, CardVacancies, AppContainer } from '../../../components'

const styles = StyleSheet.create({})

type Stack11T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

// eslint-disable-next-line
const res = n =>
  new Array(n).fill().map(() => {
    const { random, lorem, company } = faker
    return {
      id: random.uuid(),
      title: lorem.text(),
      description: lorem.paragraph(),
      company: company.companyName(),
      cost: random.number()
    }
  })

const array = res(10)

const Stack11 = memo<Stack11T>(({ navigation }) => {
  //const [loading, setLoading] = useState(false)
  const _onPress = params => navigation.navigate('Stack12', params)

  const renderItem = ({ item }) => {
    return (
      <>
        <CardVacancies obj={item} onPress={() => _onPress(item)} />
        <Space height={10} />
      </>
    )
  }

  return (
    <AppContainer flatlist>
      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <Formik
              initialValues={{ search: '' }}
              onSubmit={values => Alert.alert(JSON.stringify(values))}
              validationSchema={Yup.object().shape({
                search: Yup.string()
              })}
            >
              {({ values, handleChange, errors, setFieldTouched, touched }) => (
                <>
                  <Space height={30} />
                  <Input
                    name="search"
                    value={values.search}
                    onChangeText={handleChange('search')}
                    onBlur={() => setFieldTouched('search')}
                    placeholder="search"
                    touched={touched}
                    errors={errors}
                  />
                </>
              )}
            </Formik>
          </>
        }
      />
    </AppContainer>
  )
})

export { Stack11 }
