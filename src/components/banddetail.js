import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { getBandDetail } from '../reducers/banddetail';

export class BandDetail extends Component {

  componentDidMount() {
    const _id = this.props.navigation.getParam('_id', 'no_id');
    console.log('mounting band details: %s', _id);
    this.props.getBandDetail(_id);
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.row}>
          <Text style = {styles.label}>
            Name:
          </Text>
          <Text style = {styles.item}>
            {this.props.detail.name}
          </Text>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.label}>
            Genre:
          </Text>
          <Text style = {styles.item}>
            {this.props.detail.genre}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 16,
  },
  label: {
    flex: 1,
    fontSize: 20,
  },
  item: {
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const mapStateToProps = state => {
  const bandDetail = state.detail;
  if (bandDetail) {
    return {
      detail: bandDetail
    };
  } else {
    console.log('no band details');
    return {};
  }
};

const mapDispatchToProps = {
  getBandDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BandDetail));
