import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NavBar({ openDrawer, navTitle }) {
  return (
    <View style={styles.deliveryNav}>
      <TouchableOpacity
        onPress={openDrawer}
      >
        <MaterialIcons name="menu" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.deliveryText}>{navTitle}</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ea5b31',
  },
  deliveryText: {
    textAlign: 'center',
    padding: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
