//@flow
import React, { useState, memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { CardBorder } from '../CardBorder'

const emojiList = [
  {
    id: 1,
    title: 'page',
    name: ':page_facing_up:'
  },
  {
    id: 2,
    title: 'plug',
    name: ':electric_plug:'
  },
  {
    id: 3,
    title: 'briefcase',
    name: ':briefcase:'
  },
  {
    id: 4,
    title: 'star',
    name: ':star:'
  }
]

const numbers = ['one', 'two', 'three', 'four']

const emoji = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  padding: 1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  cardBorder: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  page: {
    ...emoji
  },
  plug: {
    ...emoji
  },
  briefcase: {
    ...emoji
  },
  star: {
    ...emoji
  },
  default: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})

type TabCompanyT = {|
  children?: Node,
  setTab: Function
|}

const TabCompany = memo<TabCompanyT>(({ children, setTab }) => {
  const [value, setValue] = useState({
    one: true,
    two: false,
    three: false,
    four: false
  })

  const _onChangeState = (number: number) => () => {
    const defaultObject = numbers.reduce((acc, el: string) => ({ ...acc, [el]: false }), {})
    setTab(number - 1)
    // $FlowFixMe
    setValue({ ...defaultObject, [numbers[number - 1]]: true })
  }

  const { container, cardBorder } = styles

  return (
    <>
      <CardBorder viewStyle={cardBorder}>
        <View style={container}>
          {emojiList.map(({ id, title, name }) => {
            const check = value[numbers[id - 1]]
            return (
              <View style={{ opacity: check ? 1 : 0.5 }} key={id}>
                <TouchableOpacity onPress={_onChangeState(id)}>
                  <Emoji name={name} style={check ? styles[title] : styles.default} />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </CardBorder>
      {children}
    </>
  )
})

export { TabCompany }
