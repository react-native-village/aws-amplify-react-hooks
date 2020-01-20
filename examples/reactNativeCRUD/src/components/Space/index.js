import React, { memo } from 'react'
import { View } from 'react-native'

const Space = memo(({ height }) => <View style={{ height: height || 30 }} />)

export { Space }
