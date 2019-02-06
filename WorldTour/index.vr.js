import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

class WorldTour extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
      </View>
    )
  }
}

AppRegistry.registerComponent('WorldTour', () => WorldTour);