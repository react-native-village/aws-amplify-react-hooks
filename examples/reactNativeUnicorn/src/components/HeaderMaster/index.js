// @flow
import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background, Avatar, Star, H1, ProfileInfo, IconCircle, Space } from '..'

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
    top: 160,
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
    alignSelf: 'center',
    bottom: 50
  },
  info: {
    bottom: 40
  }
})

type Props = {
  user: {
    name: string,
    age: string,
    uri: string,
    location: string,
    star: boolean
  }
}

const HeaderMaster = memo<Props>(({ user }) => {
  const { container, starStyle, avatarStyle, balloon, telephone, sound, h1, info } = styles
  const { name, age, uri, star, location } = user
  return (
    <>
      <View style={container}>
        <Background>
          <Star star={star} viewStyle={starStyle} />
          <Avatar uri={uri} viewStyle={avatarStyle} />
        </Background>
      </View>
      <Space height={40} />
      <IconCircle name=":telephone_receiver:" viewStyle={telephone} />
      <IconCircle name=":thought_balloon:" viewStyle={balloon} />
      <IconCircle name=":loud_sound:" viewStyle={sound} />
      <H1 title={name} textStyle={h1} />
      <ProfileInfo location={location} age={age} viewStyle={info} />
    </>
  )
})

export { HeaderMaster }
