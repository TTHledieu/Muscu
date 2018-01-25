import React, { Component } from 'react'
import Button from 'react-native-button'
import {
  Platform,
  Text,
  View
} from 'react-native'

import styles from './style/styles'

export default class InputButton extends Component {
  constructor (props) {
    super();
  }

  render() {
    return (
      <View style={styles.sport}>
        <Button
        onPress={this.onNewPress.bind(this, this.props.sport)}>
        {this.props.sport}
        </Button>
      </View>
    );
  }

  onNewPress (sport) {
     // Set state ?
     console.log(this.state);
    console.log('new : ', sport)
  }
}