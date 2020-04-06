//@flow
import React, { useState, memo } from 'react'
import type { Node } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
    title: 'briefcase',
    name: ':briefcase:'
  },
  {
    id: 3,
    title: 'cap',
    name: ':mortar_board:'
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
  cardBorder: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  page: {
    ...emoji
  },
  briefcase: {
    ...emoji
  },
  cap: {
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

type TabDeveloperT = {|
  children?: Node,
  setTab: Function
|}

const TabDeveloper = memo<TabDeveloperT>(({ children, setTab }) => {
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
                <TouchableOpacity key={id} onPress={_onChangeState(id)}>
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

export { TabDeveloper }
