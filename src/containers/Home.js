import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionsCreator from '../actions'

import styles from '../style/styles'

import Sport from './Sport'
import Training from './Training'
import Exercise from './Exercise'

export default class Home extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Sport></Sport>
        <Training></Training>
        <Exercise></Exercise>
      </View>
    )
  }
}
