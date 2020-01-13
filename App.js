/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import Home from './src/screens/home'
import Navigator from './src/routes/homeStack'

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
