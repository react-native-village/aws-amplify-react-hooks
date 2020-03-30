// @flow
import React, { memo, useState } from 'react'
import { Modal, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLUE } from '../constants'
import { links } from '../Form'
import { Input, Button } from '..'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  starStyle: {
    width: 25,
    height: 25
  },
  iconStyle: {
    padding: 8
  },
  button: {
    marginTop: 40
  },
  plus: {
    paddingLeft: 7,
    paddingTop: 8
  }
})

type SocialIconsT = {
  onPress: Function,
  www: string
}

const data = [
  {
    id: '0',
    uri: 'github'
  },
  {
    id: '1',
    uri: 'youtube'
  },
  {
    id: '2',
    uri: 'instagram'
  },
  {
    id: '3',
    uri: 'facebook'
  }
]

const SocialIcons = memo<SocialIconsT>(({ onPress }) => {
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)

  const { container, sub, starStyle, iconStyle, button, plus } = styles

  const renderItem = ({ item: { uri } }) => {
    return (
      <TouchableOpacity onPress={onPress} style={iconStyle}>
        <Icon name={uri} size={25} color={BLUE} />
      </TouchableOpacity>
    )
  }

  const _keyExtractor = obj => obj.id.toString()

  const _onPress = async () => {
    setModal(!modal)
  }

  return (
    <View style={container}>
      <FlatList
        horizontal
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <TouchableOpacity onPress={() => setModal(true)} style={plus}>
            <Image style={starStyle} source={require('./plus.png')} />
          </TouchableOpacity>
        }
      />
      <Modal animationType="slide" transparent={false} visible={modal}>
        <View style={sub}>
          <Input type={links} value={value} onChange={text => setValue(text)} />
          <Button textStyle={button} onPress={_onPress} title="Done" />
        </View>
      </Modal>
    </View>
  )
})

export { SocialIcons }
