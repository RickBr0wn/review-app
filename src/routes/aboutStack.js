import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about'

export default createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: {
        title: 'About GameZone',
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
