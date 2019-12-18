import { createStackNavigator } from 'react-navigation-stack'
import { JobsMain } from './JobsMain'
import { JobDetail } from './JobDetail'
import { JobAdd } from './JobAdd'

const Jobs = createStackNavigator(
  {
    JOBS_MAIN: { screen: JobsMain },
    JOB_DETAIL: { screen: JobDetail },
    JOB_ADD: { screen: JobAdd }
  },
  {
    headerMode: 'none'
  }
)

Jobs.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true

  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export { Jobs }
