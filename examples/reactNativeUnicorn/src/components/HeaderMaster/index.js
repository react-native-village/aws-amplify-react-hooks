// @flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background, Avatar, Star, H1, IconCircle, Space } from '..'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  starStyle: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1
  },
  avatarStyle: {
    position: 'absolute',
    top: 110,
    zIndex: 0
  },
  telephone: {
    bottom: 20,
    right: 100
  },
  balloon: {
    bottom: 55,
    left: 100
  },
  sound: {
    bottom: 70
  },
  h1: {
    textAlign: 'center',
    bottom: 65
  }
})

type HeaderMasterT = {
  user: {
    name: string,
    uri: string,
    star: boolean
  }
}

const HeaderMaster = memo<HeaderMasterT>(({ user }) => {
  const { container, starStyle, avatarStyle, balloon, telephone, sound, h1 } = styles
  const { name, uri, star } = user
  return (
    <>
      <View style={container}>
        <Background>
          <Star star={star} viewStyle={starStyle} />
          <Avatar uri={uri} viewStyle={avatarStyle} size="xLarge" />
        </Background>
      </View>
      <Space height={40} />
      <IconCircle name=":telephone_receiver:" viewStyle={telephone} />
      <IconCircle name=":thought_balloon:" viewStyle={balloon} />
      <IconCircle name=":loud_sound:" viewStyle={sound} />
      <H1 title={name} textStyle={h1} />
    </>
  )
})

export { HeaderMaster }
