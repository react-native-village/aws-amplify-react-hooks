// @flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  blank: {
    height: 30,
    width: 50
  }
})

type TabT = {
  title: string
}

const Tab = memo<TabT>(({ title }) => {
  const { blank } = styles
  const source = () => ICONS.filter(x => x.title === title)[0].path
  const search = title.includes('Disable')
  return (
    <>
      {title === 'TabBottom2Disable' ? (
        <View style={blank} />
      ) : (
        <Emoji
          name={source()}
          style={{
            padding: 13,
            opacity: search ? 0.5 : 1,
            ...ifIphoneX(
              {
                fontSize: 24
              },
              {
                fontSize: 24
              }
            )
          }}
        />
      )}
    </>
  )
})

export { Tab }
