import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import InputButton from '../components/InputButton'

import { ActionsCreator } from '../actions'

import styles from '../style/styles'

import sports from '../data/sports.json'

class Sport extends Component {
  
  onPress = (selectedSport) => {
    this.props.selectSport(selectedSport)
  }

  render() {
    return (
      <View style={styles.sport}>
        {
          sports.map((sport, index) => (
            <View style={styles.button} key={index} >
              <InputButton 
                sport={sport.value}
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
  selectedSport: state.selectedSport
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sport)