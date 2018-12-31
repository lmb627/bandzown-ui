import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listBands } from '../reducers/reducer';

export class BandsList extends Component {
  componentDidMount() {
    this.props.listBands();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    const { bands } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={bands}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let bands = state.bands
  if(bands) {
    let storedBands = bands.map(band => ({ key: band.id, ...band }));
    return {
      repos: storedBands
    };
  } else { return [];}

};

const mapDispatchToProps = {
  listBands
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsList);
