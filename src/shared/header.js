import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Header({navigation, title}) {
  const [menu, setMenu] = React.useState(false)
  return (
    <View style={styles.header}>
      <Icon
        name="menu"
        size={28}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
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
    left: -60,
  },
})
