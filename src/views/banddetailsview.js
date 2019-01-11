import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import bandDetailReducer from '../reducers/banddetail';
import BandDetail from '../components/banddetail';

const client = axios.create({
  baseURL: 'https://bandzown.herokuapp.com',
  responseType: 'json'
});

const store = createStore(bandDetailReducer, applyMiddleware(axiosMiddleware(client)));

export class BandDetailsView extends Component {

  static navigationOptions = () => {
      return {
        headerTitle: 'Band Detail',
      };
    };

  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <Provider store={store}>
          <View style={styles.container}>
            <BandDetail />
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
    alignItems: 'stretch',
    backgroundColor: '#fff'
  }
});
