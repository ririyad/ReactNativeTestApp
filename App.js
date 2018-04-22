import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    //toggling state every second
    setInterval( ()=> {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText?this.props.text: ' ';
    return (
      <Text>{ display } </Text>
    );
  }
}

export default class Blinking extends Component {
  render() {
    return (
      <View>
       <Blink text = 'This text is blinking' />
       <Blink text = 'Hey, its really blinking'  />
       <Blink text = 'Can you see me?' />
       <Blink text = 'Yes you can!' />
      </View>
    );
  }
}