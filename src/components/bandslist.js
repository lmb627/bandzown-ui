import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  SearchBar } from 'react-native';


import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { listBands } from '../reducers/bands';

export class BandsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      loading: false
    };
  }

  componentDidMount() {
    this.handleRefresh();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      this.setState(
        {
          refreshing: nextProps.loading
        }
      );
    }
  }

  refreshCallback() {
    this.props.listBands();
  }

  handleRefresh = () => {
    this.setState(
      {
          refreshing: true
      },
      this.refreshCallback
    );
  };

  renderHeader() {
     return (
       <SearchBar placeholder="Type Here..." lightTheme round />
     );
   }

  renderItem({ item }) {
    return (
      <View style = {styles.item}>
        <Text>{item.name}</Text>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate(
            'BandDetails',
            {
              _id: item._id,
            }
          )}
          underlayColor="white"
        >
        <Text>&gt;</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          styles = {styles.flatList}
          data = {this.props.bands}
          renderItem = {this.renderItem.bind(this)}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  flatList: {
    flex: 1,
    alignItems: 'stretch'
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const mapStateToProps = state => {
  const bands = state.bands;
  if (bands) {
    const storedBands = bands.map(band => ({ key: band._id, ...band }));
    return {
      bands: storedBands,
      loading: state.loading
    };
  } else {
    console.log('no bands');
    return [];
  }
};

const mapDispatchToProps = {
  listBands
};

export default connect(mapStateToProps, mapDispatchToProps)((withNavigation(BandsList)));
