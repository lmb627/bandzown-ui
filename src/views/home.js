import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

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

export class Home extends Component {
  render() {
    return (
      <View style = {styles.viewContent}>
        <Text style = {styles.viewTitle}>Home Screen</Text>
        <Button
          title="Go to Bands"
          onPress={() => this.props.navigation.navigate('BandsView')}
        />
      </View>
    );
  }
}
