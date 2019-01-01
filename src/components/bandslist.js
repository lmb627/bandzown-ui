import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listBands } from '../reducers/bands';

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
    return (
      <View styles = {styles.container}>
        <FlatList
          styles={styles.flatList}
          data={this.props.bands}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  flatList: {
    flex: 1,
    alignItems: "stretch"
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

    console.log("there are %d bands", bands.length)
    bands.forEach(function(x){
      console.log("id: %s; name: %s", x._id, x.name);
    });
    let storedBands = bands.map(band => ({ key: band._id, ...band }));
    return {
      bands: storedBands
    };
  } else {
    console.log("no bands");
    return [];
  }

};

const mapDispatchToProps = {
  listBands
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsList);
