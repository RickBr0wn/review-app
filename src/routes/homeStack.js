import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'GameZone',
      },
    },
    ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {
        title: 'Review Details',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        //   backgroundColor: '#eee',
      },
    },
  },
)
