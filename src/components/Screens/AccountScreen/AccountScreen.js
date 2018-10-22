import React from 'react';
import { Constants } from 'expo';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

import NavBar from '../../NavBar/NavBar';

export default class AccountScreen extends React.Component {
  onPress = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: ' + result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar openDrawer={() => this.props.navigation.openDrawer()} navTitle="Account" />
        <TouchableOpacity
          // publishPermissions={["publish_actions"]}
          // onLoginFinished={
          //   (error, result) => {
          //     if (error) {
          //       alert("login has error: " + result.error);
          //     } else if (result.isCancelled) {
          //       alert("login is cancelled.");
          //     } else {
          //       AccessToken.getCurrentAccessToken().then(
          //         (data) => {
          //           alert(data.accessToken.toString())
          //         }
          //       )
          //     }
          //   }
          // }
          // onLogoutFinished={() => alert("logout.")}
          onPress={this.onPress}
        >
          <Text>Facebook</Text>
        </TouchableOpacity>
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
