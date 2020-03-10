import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, useNavigationBuilder, createNavigatorFactory } from '@react-navigation/native'
import { TabRouter, TabActions } from '@react-navigation/routers'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Tab } from './components'

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    ...ifIphoneX(
      {
        height: 80
      },
      {
        height: 50
      }
    )
  }
})

const TabNavigator = ({ initialRouteName, children, screenOptions, tabBarStyle, contentStyle }) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName
  })

  const { index, routes } = state

  const {
    colors: { backgroundColor2 }
  } = useTheme()

  const { container } = styles

  return (
    <>
      <View style={[{ flex: 1 }, contentStyle]}>{descriptors[routes[index].key].render()}</View>
      <View style={[{ backgroundColor: backgroundColor2 }, container, tabBarStyle]}>
        {routes.map(({ name, key }) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: key
                })

                if (!event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(name),
                    target: state.key
                  })
                }
              }}
            >
              <Tab
                title={`TabBottom${index}` === name ? `TabBottom${index}` : `${name}Disable`}
                imageStyle={{ alignSelf: 'flex-end' }}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </>
  )
}

export default createNavigatorFactory(TabNavigator)()
