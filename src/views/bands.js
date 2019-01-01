import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import bandsReducer from '../reducers/bands';
import BandsList from '../components/bandslist';

const client = axios.create({
  baseURL: 'https://bandzown.herokuapp.com',
  responseType: 'json'
});

const store = createStore(bandsReducer, applyMiddleware(axiosMiddleware(client)));

export class Bands extends Component {
  static navigationOptions = {
    title: 'Bands',
  };

  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <Provider store={store}>
          <View style={styles.container}>
            <BandsList />
          </View>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff'
  }
});
