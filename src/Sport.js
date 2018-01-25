import React, { Component } from 'react'
import {
  Platform,
  Text,
  View
} from 'react-native'

import InputButton from './InputButton'

import styles from './style/styles'

import sports from './data/sports.json'

export default class Sport extends Component {
  render() {
    return (
      <View style={styles.sport}>
        {this.renderSports()}
      </View>
    );
  }

  renderSports () {
    let allSports = []
    sports.forEach(sport => {
      allSports.push(<InputButton
        sport={sport}
        key={sport} />)
    });
    return allSports
  }
}