import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import {globalStyles as gs, images} from '../styles/global'
import Card from '../shared/card'

const ReviewDetails = ({navigation}) => {
  const rating = navigation.getParam('rating')

  return (
    <View style={gs.container}>
      <Card>
        <Text>{navigation.getParam('key')}</Text>
        <Text style={gs.titleText}>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
        <View style={styles.rating}>
          <Text>GZ rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      <Button title="back to home screen" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
})

export default ReviewDetails
