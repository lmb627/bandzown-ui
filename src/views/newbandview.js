import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import NewBandForm from '../components/newbandform';
import newBandReducer from '../reducers/newband';


const client = axios.create({
  baseURL: 'https://bandzown.herokuapp.com',
  responseType: 'json'
});

const store = createStore(newBandReducer, applyMiddleware(axiosMiddleware(client)));

export class NewBandView extends Component {
  static navigationOptions = {
    title: 'New Band'
  };

  render() {
    return (
      <SafeAreaView style = {styles.safeContent}>
        <StatusBar
          barStyle="light-content"

        />
        <Provider store={store}>
          <View styles={styles.container}>
            <NewBandForm />
          </View>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
