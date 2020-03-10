// @flow
import React, { memo, useState } from 'react'
import { FlatList, Alert } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import faker from 'faker'
import { Space, Developer, AppContainer, Input } from '../../components'

type TabBottom2T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

// eslint-disable-next-line
const res = n =>
  new Array(n).fill().map(() => {
    const { random, image, name } = faker
    return {
      id: random.uuid(),
      title: name.findName(),
      uri: image.avatar(),
      rate: random.number()
    }
  })

const array = res(10)
const TabBottom2 = memo<TabBottom2T>(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const _onPress = () => navigation.navigate('Stack2')

  const renderItem = ({ item: { title, uri, rate } }) => {
    return (
      <>
        <Developer title={title} uri={uri} rate={rate} />
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
        }
      />
    </AppContainer>
  )
})

export { TabBottom2 }
