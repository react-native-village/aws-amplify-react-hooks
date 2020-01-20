import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { ButtonTab } from './ButtonTab'
import { Device } from '../../constants'

const styles = StyleSheet.create({
  tabbar: {
    ...Device.select({
      iphone5: {
        height: 70
      },
      mi5: {
        height: 70
      },
      iphone678: {
        height: 100
      },
      googlePixel: {
        height: 90
      },
      redmiNote5: {
        height: 100
      }
    }),
    flexDirection: 'row',
    backgroundColor: '#0F0F0F',
    borderTopColor: '#0F0F0F',
    overflow: 'hidden',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 10
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

const MainMenuIcons = ['user-secret', 'home']

class TabBar extends Component {
  render() {
    const { navigation, jumpTo, activeTintColor, inactiveTintColor } = this.props
    const { routes } = navigation.state
    const { tabbar, tab } = styles

    return (
      <View style={tabbar}>
        {routes.map((route, index) => {
          const { key } = route
          const focused = index === navigation.state.index
          const textColor = focused ? activeTintColor : inactiveTintColor
          return (
            <TouchableWithoutFeedback key={`${key}`} onPress={() => jumpTo(key)}>
              <View style={tab}>
                <ButtonTab icon={MainMenuIcons[index]} tintColor={textColor} />
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    )
  }
}
export { TabBar }
