import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import styles from './style/styles';

import Sport from './Sport';
import Muscle from './Muscle';
import Exercise from './Exercise';

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      sport: null,
      training: null,
      exercise: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Sport></Sport>
        <Muscle></Muscle>
        <Exercise></Exercise>
      </View>
    );
  }
}