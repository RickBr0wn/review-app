import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles as gs} from '../styles/global'

const Home = ({navigation}) => {
  return (
    <View style={gs.container}>
      <Text>Home</Text>
      <Button
        title="go to review details"
        onPress={() => navigation.navigate('ReviewDetails')}
      />
    </View>
  )
}

export default Home
