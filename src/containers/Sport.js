import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
  LayoutAnimation
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ActionsCreator } from '../actions'

import InputButton from '../components/InputButton'

import styles from '../style/styles'

import sports from '../data/sports.json'

class Sport extends Component {

  onPress = (selectedSport) => {
    LayoutAnimation.spring()
    this.props.selectSport(selectedSport)
  }

  render() {
    const isEmpty = Object.keys(this.props.selectedFields).length
    return (
      <View style={[styles.sport, {flex: !isEmpty ? 1 : this.props.selectedFields.sport.flex}]} >
        {
          sports.map((sport, index) => (
            <View style={styles.button} key={index} >
              <InputButton 
                field={sport.value}
                onPress={() => this.onPress(sport.value)}
              />
            </View>
          ))
        }
      </View>
    )
  }
}

Sport.PropTypes = {
  selectSport: PropTypes.func
}

const mapDispatchToProps = {
  selectSport: ActionsCreator.selectSport
}

const mapStateToProps = (state) => ({
  selectedFields: state.selectedFields
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sport)