//@flow
import React,{ memo, useState } from 'react'
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity, Image } from 'react-native'
import Emoji from "react-native-emoji"
import { CardBorder } from ".."
import { win } from "../constants"

const emojiList = [
    {
        id: 1,
        title: 'page',
        name: ":space_invader:"
    },
    {
        id: 2,
        title: 'briefcase',
        name: ":briefcase:"
    },
    {
        id: 3,
        title: 'cap',
        name: ":heavy_plus_sign:"
    },
    {
        id: 4,
        title: 'star',
        name: ":unicorn_face:"
    },
    {
        id: 5,
        title: 'settings',
        name: ":hammer_and_wrench:"
    }
]

const numbers = ['one', 'two', 'three','four', 'five']

const emoji = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding:1
    //backgroundColor: 'rgba(52, 52, 52, 0.4)'
}
const styles = StyleSheet.create({
    cardBorder:{
        padding: 10
    },
    container: {
        width: win.width/1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    star:{
        ...emoji
    },
    settings:{
        ...emoji
    },
    default: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    plus:{
        width: 50,
        height:50
    }
})

const Tabs = memo<Props>(() => {
    const [value, setValue] = useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false
    })

    const [modal, setModal] = useState(false)

    const _onState = number => () => {
        const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
        setValue({ ...defaultObject, [numbers[number - 1]]: true })
    }
    const { container, cardBorder, plus } = styles
    return(
      <>
        <CardBorder style={cardBorder}>
          <View style={container}>
            {emojiList.map(({ id, title,name })=>{
                const check = value[numbers[id-1]]
                return (
                 id === 3 ?
                   <TouchableOpacity onPress={()=>setModal(true)}>
                     <Image style={plus} source={require('./plus.png')} />
                   </TouchableOpacity>
                     :
                   <TouchableOpacity key={id} onPress={_onState(id)}>
                     <Emoji name={name} style={check ? styles[title] : styles.default} />
                   </TouchableOpacity>
                )
            })}
          </View>
        </CardBorder>
        <Modal
          animationType="down"
          transparent={false}
          visible={modal}
          onRequestClose={() => {alert('Modal has been closed.')}}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
              <Button title="Close Modal" onPress={()=>setModal(false)} />
            </View>
          </View>
        </Modal>
      </>
    )
})

export { Tabs }

