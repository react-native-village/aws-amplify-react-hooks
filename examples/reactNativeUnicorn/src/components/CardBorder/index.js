// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE, PINK, BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: 'white',
    padding: 30,
    width: '100%'
  },
  h2: {
    fontFamily: '3270Narrow',
    fontSize: 21
  }
})

type Props = {
  title: string
}

const CardBorder = memo<Props>(({ title = 'some text' }) => {
  const { container, h2 } = styles
  return (
    <>
      <View style={[container, { padding: 0, borderColor: BLUE }]}>
        <View style={[container, { padding: 0, borderColor: PINK, marginLeft: -5, marginTop: 1 }]}>
          <View style={[container, { marginTop: 2, marginLeft: 5 }]}>
            <Text style={[h2, { color: WHITE }]}>{title}</Text>
          </View>
        </View>
      </View>
    </>
  )
})

export { CardBorder }
