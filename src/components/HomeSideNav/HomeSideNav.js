import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HomeSideNav extends React.Component {
  render() {
    return (
      <Text style={styles.check}>Hi</Text>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    flex: 1,
    marginTop: 50,
  }
});
