import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';


export default class FlexDimensionBasics extends Component {
  render() {
    return (
      <View style = {{flex: 1}} >
        <View style={{flex:1, backgroundColor : 'powderblue' }}/>
        <View style={{flex: 2, backgroundColor : 'skyblue' }}/>
        <View style={{flex:3, backgroundColor : 'steelblue' }}/>
        </View>
    );
  }
}
