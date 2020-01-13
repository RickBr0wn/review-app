import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

export default createAppContainer(
  createStackNavigator(
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
  ),
)
