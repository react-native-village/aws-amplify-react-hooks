//@flow
import React,{ memo, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
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
    container: {
        width: win.width/1.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})

const Tabs = memo<Props>(({  }) => {
    const [value, setValue] = useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false
    })

    const _onChangeState = number => () => {
        const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
        setValue({ ...defaultObject, [numbers[number - 1]]: true })
    }
    const { container } = styles
    return(
      <CardBorder>
        <View style={container}>
          {emojiList.map(({ id, title,name })=>{
                const check = value[numbers[id-1]]
                return (
                  <TouchableOpacity key={id} onPress={_onChangeState(id)}>
                    <Emoji name={name} style={check ? styles[title] : styles.default} />
                  </TouchableOpacity>
                )
            })}
        </View>
      </CardBorder>
    )
})

export { Tabs }

