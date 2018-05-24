import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

export default class HomeSideNav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.accountSection}>
          <Text style={styles.loginText}>Log in to your account</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.sidenavDetails}>
            <MaterialCommunityIcons name="map-marker-outline" size={28} color="rgba(0, 0, 0, 0.7)"/> 
            <Text style={styles.detailsText}>Your Location</Text>
          </View>
          <View style={styles.sidenavDetails}>
            <Feather name="percent" size={28} color="rgba(0, 0, 0, 0.7)"/> 
            <Text style={styles.detailsText}>Deals</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.sidenavDetails}>
            <MaterialIcons name="account-box" size={30} color="rgba(0, 0, 0, 0.8)"/>
            <Text style={styles.detailsText}>Account</Text>
          </View>
          <View style={styles.sidenavDetails}>
            <Feather name="file-text" size={30} color="rgba(0, 0, 0, 0.8)"/>
            <Text style={styles.detailsText}>Orders</Text>
          </View>
        </View>
        <View style={styles.settingsDetails}>
          <Text style={styles.detailsText}>Settings</Text>
          <Text style={styles.detailsText}>Live chat</Text>
          <Text style={styles.detailsText}>Info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  accountSection: {
    flex: 0,
    height: '35%',
    justifyContent: 'flex-end',
    backgroundColor: '#ea5b31',
  },
  loginText: {
    padding: 15,
    fontWeight: '600',
    color: '#fff',
  },
  detailsContainer: {
    height: '17%',
    borderBottomColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomWidth: 0.5,
  },
  sidenavDetails: {
    flexDirection: 'row',
    margin: 12,
    alignItems: 'center',
  },
  detailsText: {
    paddingLeft: 13,
    color: "rgba(0, 0, 0, 0.7)",
  },
  settingsDetails: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  }
});
