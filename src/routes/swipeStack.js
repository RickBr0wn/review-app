import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const SwipeTabs = createMaterialTopTabNavigator(
  {
    Home: {screen: Home},
    ReviewDetails: {screen: ReviewDetails},
  },
  {
    initialRouteName: 'Home',
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: {height: 0},
    },
  },
)

export default createAppContainer(SwipeTabs)
