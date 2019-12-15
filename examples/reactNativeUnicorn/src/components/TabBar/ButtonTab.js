// @flow
import React, { memo } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

type Props = {
  icon: 'user-secret' | 'home',
  tintColor: string,
  mainTab: boolean
}

const ButtonTab = memo<Props>(({ icon, tintColor }) => <Fontisto name={icon} size={35} color={tintColor} />)

export { ButtonTab }
