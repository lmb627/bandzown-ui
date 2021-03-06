import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootInput: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    margin: 10
  },
  rootError: {
    color: 'red',
    marginLeft: 10,
  },
  rootFailed: {
    color: 'red',
    textAlign: 'center',
  },
  rootSucceeded: {
    color: 'green',
    textAlign: 'center',
  },
  formLabel: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default styles;
