import React, { memo } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { useTheme } from '@react-navigation/native'
import { Header, Space, Loading } from '..'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

const BLUE = '#00FFFF'
const RED = '#FC2847'

const AppContainer = memo(
  ({
    flatlist = false,
    iconLeft = 'angle-dobule-left',
    onPress = null,
    onPressRight = null,
    colorLeft = BLUE,
    iconRight,
    colorRight = BLUE,
    children,
    message = '',
    title,
    loading = false
  }) => {
    const { container, sub } = styles
    const { dark } = useTheme()
    const bg = dark ? require('./bgB.png') : require('./bgW.png')
    return (
      <ImageBackground source={bg} style={container}>
        <StatusBarAlert
          visible={message !== ''}
          message={message}
          backgroundColor={RED}
          color="white"
          pulse="background"
          height={40}
          style={{ padding: 5, paddingTop: 5 }}
        />
        {title && (
          <Header
            title={title}
            onPress={onPress}
            onPressRight={onPressRight}
            iconLeft={iconLeft}
            colorLeft={colorLeft}
            colorRight={colorRight}
            iconRight={iconRight}
          />
        )}
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {!flatlist ? (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={sub}>{children}</View>
                  <Space height={200} />
                </ScrollView>
              ) : (
                <>
                  <View style={sub}>{children}</View>
                </>
              )}
            </>
          )}
        </>
      </ImageBackground>
    )
  }
)

export { AppContainer }
