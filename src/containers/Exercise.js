import React, { Component } from 'react'
import {
  Platform,
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { ActionsCreator } from "../actions";

import InputButton from "../components/InputButton";

import styles from '../style/styles'

import exercise from "../data/exercises.json";

class Exercise extends Component {

  onPress = (selectedExercise) => {
    this.props.selectExercise(selectedExercise)
  }

  getExercises = () => {
    if (this.props.selectedFields.sport && this.props.selectedFields.training) {
      return exercise[this.props.selectedFields.sport][this.props.selectedFields.training]
    }
    return []
  }

  render() {
    return (
      <View style={styles.exercise}>
        {
          this.getExercises().map((exercise, index) => (
            <View style={styles.button} key={index} >
              <InputButton 
                field={exercise.value}
                onPress={() => this.onPress(exercise.value)}
              />
            </View>
          ))
        }
      </View>
    );S
  }
}

Exercise.PropTypes = {
  selectExercise: PropTypes.func,
}

const mapDispatchToProps = {
  selectExercise: ActionsCreator.selectExercise
}

const mapStateToProps = (state) => ({
  selectedFields: state.selectedFields
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exercise)