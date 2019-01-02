import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { listBands } from '../reducers/bands';

export class BandsList extends Component {

  componentDidMount() {
    this.props.listBands();
  }

  touchCallback = () => {
     // this.props.navigation.navigate('BandDetails');
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
    )
  }

  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          styles = {styles.flatList}
          data = {this.props.bands}
          renderItem = {this.renderItem.bind(this)}
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
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default connect(mapStateToProps, mapDispatchToProps)((withNavigation(BandsList)));
