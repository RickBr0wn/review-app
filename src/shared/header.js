import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Header({navigation, title}) {
  const [menu, setMenu] = React.useState(false)
  return (
    <ImageBackground
      source={require('../../assets/game_bg.png')}
      style={styles.header}>
      <Icon
        name="menu"
        size={28}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View style={styles.container}>
        <Image
          source={require('../../assets/heart_logo.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: 400,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
})
