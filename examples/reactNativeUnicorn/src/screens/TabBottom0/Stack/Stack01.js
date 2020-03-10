// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, FlatList, Alert, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import faker from 'faker'
import { Space, CardIssue, AppContainer, Input, ButtonStatusIssue } from '../../../components'

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    marginBottom: 20
  }
})

type Stack01T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

// eslint-disable-next-line
const res = n =>
  new Array(n).fill().map(() => {
    const { random, image, name, lorem } = faker
    return {
      id: random.uuid(),
      title: lorem.sentence(),
      description: lorem.paragraph(),
      name: name.findName(),
      comments: random.number(),
      uri: image.avatar(),
      rate: random.number()
    }
  })

const array = res(10)

const Stack01 = memo<Stack01T>(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const _onPress = params => navigation.navigate('Stack02', params)

  const renderItem = ({ item }) => {
    return (
      <>
        <CardIssue obj={item} onPress={() => _onPress(item)} />
        <Space height={10} />
      </>
    )
  }

  const {
    colors: { primary, secondary }
  } = useTheme()
  const { buttonStyle } = styles

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
            <View style={buttonStyle}>
              <ButtonStatusIssue title={`Open ${34}`} color={primary} />
              <ButtonStatusIssue title={`Closed ${34}`} color={secondary} />
            </View>
          </>
        }
      />
    </AppContainer>
  )
})

export { Stack01 }
