import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  content: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
})

Card
