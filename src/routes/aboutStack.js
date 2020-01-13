import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'

export default createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: ({navigation}) => ({
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 50,
      },
    },
  },
)
