// @flow
import React, { memo } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ICONS } from './images'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  h3: {
    fontFamily: 'ProximaNova-Regular',
    textAlign: 'left',
    fontSize: 12,
    color: '#ffffff'
  },
  h2: {
    fontFamily: 'ProximaNova-Bold',
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 4,
    color: '#202227',
    paddingRight: 25
  },
  ico: {
    resizeMode: 'contain',
    width: 20,
    height: 20
  },
  icoSub: {
    marginLeft: 25,
    marginRight: 20,
    marginTop: 2
  },
  txtSub: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginRight: 25,
    width: '70%'
  }
})

type Props = {
  short: string,
  title: string,
  content: string,
  color: string
}

const CardNotify = memo<Props>(({ color, content, title, short }) => {
  const { container, h3, ico, icoSub, txtSub, h2 } = styles
  const image = () => ICONS.filter(x => x.color === color)[0].path
  return (
    <View
      style={[
        container,
        {
          backgroundColor: color,
          height: short ? 78 : 90,
          paddingTop: short ? 15 : 0
        }
      ]}
    >
      <View style={txtSub}>
        <View style={icoSub}>
          <Image style={ico} source={image()} />
        </View>
        {color !== '#C91618' ? (
          <View>
            <Text style={h2}>{title}</Text>
            <Text style={[h3, { color: '#212333' }]}>{content}</Text>
          </View>
        ) : (
          <Text style={h3}>{content}</Text>
        )}
      </View>
    </View>
  )
})

export { CardNotify }
