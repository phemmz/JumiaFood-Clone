import React from 'react';
import { Constants } from 'expo';
import { View, StyleSheet } from 'react-native';

import NavBar from '../../NavBar/NavBar';

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar openDrawer={() => this.props.navigation.openDrawer()} navTitle="Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
  },
});
