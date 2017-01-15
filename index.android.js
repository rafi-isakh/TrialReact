/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Rafi Ramadhan Isakh
        </Text>
        <Image
          style={{
            width: 150,
            height:200,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#000000',
          }}
          source={require('./asset/image/profile.jpg')}/>
          <Text style={styles.welcome}>
            Refactory
          </Text>
          <Text style={styles.instructions}>
            Batch 1 - Camorra
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
