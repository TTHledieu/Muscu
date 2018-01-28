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
      <Button onPress={() => this.props.onPress()}>
        <Text>{this.props.field}</Text>
      </Button>
    )
  }
}

InputButton.PropTypes = {  
  onPress: PropTypes.func,
  field: PropTypes.string
}

export default InputButton
