import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

export default createAppContainer(
  createDrawerNavigator({
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  }),
)
