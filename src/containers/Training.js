import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../style/styles';

class Training extends Component {
  render() {
    return (
      <View style={styles.training}>
        <Text>{this.props.selectedSport}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedSport: state.selectedSport
})

export default connect(
  mapStateToProps
)(Training)