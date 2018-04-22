import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just Red</Text>
        <Text style={styles.bigBlue}>just Bigblue</Text>
        <Text style={[styles.bigBlue, styles.red]}>First blue then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>first red then bigblue</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
})