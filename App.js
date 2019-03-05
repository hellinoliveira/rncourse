import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'

type Props = {};
export default class App extends Component<Props> {

  state = {
    places: []
  }

  render() {
    const placesOutput = this.state.places.map((place, i) =>
      <ListItem key={i}>placeName={place}</ListItem>
    )
    return (
      <View style={styles.container}>
        <PlaceInput />
        <View>{placesOutput}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
