import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NewBandForm } from '../components/newbandform';

export class NewBand extends Component {
  static navigationOptions = {
    title: 'New Band'
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewTitle: {
    fontSize: 30
  }
});
