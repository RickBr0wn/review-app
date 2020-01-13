import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles as gs} from '../styles/global'

const ReviewDetails = ({navigation}) => {
  return (
    <View style={gs.container}>
      <Text>Review Details</Text>
      <Button title="back to home screen" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ReviewDetails
