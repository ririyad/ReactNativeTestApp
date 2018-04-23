import React, {Component} from 'react';
import {AppRegistry, SectionList, StyleSheet, Button, Text, View} from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <Button 
        
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <SectionList
          sections={[
            {title: 'D', data: ['Davin']},
            {title: 'J', data: ['Jackson', 'Jillian', 'Jimmy', 'Joel']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})