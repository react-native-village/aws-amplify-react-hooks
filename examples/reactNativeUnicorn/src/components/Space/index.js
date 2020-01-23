// @flow
import React, { memo } from 'react'
import { View } from 'react-native'

type SpaceT = {
  height: number
}

const Space = memo<SpaceT>(({ height }) => <View style={{ height: height || 30 }} />)

export { Space }
