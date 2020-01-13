import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles as gs} from '../styles/global'
import Card from '../shared/card'

const ReviewDetails = ({navigation}) => {
  return (
    <View style={gs.container}>
      <Card>
        <Text>{navigation.getParam('key')}</Text>
        <Text style={gs.titleText}>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
        <Text>{navigation.getParam('body')}</Text>
      </Card>
      <Button title="back to home screen" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ReviewDetails
