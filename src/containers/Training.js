import React, { Component } from 'react'
import {
  Platform,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ActionsCreator } from "../actions"

import InputButton from '../components/InputButton'

import styles from '../style/styles'

import trainings from '../data/training.json'

class Training extends Component {
  
  onPress = (selectedTraining) => {
    this.props.selectTraining(selectedTraining)
  }

  getTrainings = () => {
    if (this.props.selectedFields.sport) {
      return trainings[this.props.selectedFields.sport]
    }
    return []
  }

  render() {
    return (
      <View style={styles.training}>
        {
          this.getTrainings().map((training, index) => (
            <View style={styles.button} key={index} >
              <InputButton 
                field={training.value}
                onPress={() => this.onPress(training.value)}
              />
            </View>
          ))
        }
      </View>
    )
  }
}

Training.PropTypes = {
  selectTraining: PropTypes.func
}

const mapDispatchToProps = {
  selectTraining: ActionsCreator.selectTraining
}

const mapStateToProps = (state) => ({
  selectedFields: state.selectedFields
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Training)