import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from '../reducers/reducer';

export class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('leonbovett');
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
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
  let repositories = state.repos.movies
  if(repositories) {
    let storedRepositories = repositories.map(repo => ({ key: repo.id, ...repo }));
    return {
      repos: storedRepositories
    };
  } else { return [];}

};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
