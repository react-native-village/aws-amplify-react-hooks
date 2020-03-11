// @flow
import React, { memo, useState } from 'react'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp } from '@react-navigation/native'
import faker from 'faker'
import {
  AppContainer,
  HeaderMaster,
  TabCompany,
  CardAbout,
  CardContacts,
  CardIssue,
  CardResume,
  Space
} from '../../components'
import { userData, cardContacts, cardIssue, cardResume, cardInfo } from '../../data'

type TabBottom3T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const TabBottom3 = memo<TabBottom3T>(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState('0')
  const _onPress = () => navigation.navigate('Stack2')
  const { image, name, lorem } = faker
  return (
    <AppContainer>
      <HeaderMaster user={userData} />
      <TabCompany setTab={setTab}>
        <Space height={10} />
        {
          {
            '0': <CardAbout title={lorem.paragraph()} />,
            '1': <CardContacts obj={cardContacts} />,
            '2': <CardIssue obj={cardIssue} />,
            '3': <CardResume obj={cardResume} obj2={cardInfo} bool />
          }[tab]
        }
      </TabCompany>
    </AppContainer>
  )
})

export { TabBottom3 }
