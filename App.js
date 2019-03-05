import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName : ""
  }
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 150 }}
          placeholder="An awesome input"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
