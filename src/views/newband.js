import { StyleSheet, View } from 'react-native';
import HelloForm from './components/HelloForm';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'New Band',
  };

  render() {
    return (
      <View style={styles.container}>
        <HelloForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewTitle: {
    fontSize: 30
  }
});
