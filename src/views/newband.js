import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { NewBandForm } from '../components/newbandform';


const imaginaryBand = {
  name: "no_name",
  genre: "no_genre",
  number_of_members: 0
}


export class NewBand extends Component {
  static navigationOptions = {
    title: 'New Band'
  };

  render() {
    return (
      <View styles={styles.container}>
        <NewBandForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
});
