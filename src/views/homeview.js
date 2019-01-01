import React, { Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text, Button } from "react-native";

export class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <View style = {styles.viewContent}>
          <Text style = {styles.viewTitle}>Home Screen</Text>
          <Button
            title="Go to Bands"
            onPress={() => this.props.navigation.navigate('Bands')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },
  viewContent: {
    marginTop: 100,
    marginBottom: 100,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  viewTitle: {
    fontSize: 30
  }
});
