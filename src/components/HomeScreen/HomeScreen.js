import React from 'react';
import { Constants } from 'expo';
import { StyleSheet, Text, View, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  onPress = () => {

  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/homepage-splash.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View>
            <View style={styles.deliveryNav}>
              <TouchableOpacity
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Ionicons name="md-menu" size={20} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.deliveryText}>Delivery Location</Text>
              <Text></Text>
            </View>
            <View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text style={styles.buttonText}>SEE RESTAURANTS</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
  },
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
  button: {
    alignItems: 'center',
    backgroundColor: '#ea5b31',
    margin: 30,
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  }
});
