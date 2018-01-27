import React, { Component } from 'react'
import Button from 'react-native-button'
import PropTypes from 'prop-types'
import {
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import styles from '../style/styles'

class InputButton extends Component {
  render () {
    return (
      <View style={styles.sport}>
        <Button onPress={() => this.props.onPress()}>
          {this.props.sport}
        </Button>
      </View>
    )
  }
}

InputButton.PropTypes = {  
  onPress: PropTypes.func,
  sport: PropTypes.string
}

export default InputButton
