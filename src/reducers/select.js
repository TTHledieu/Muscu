import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const selectedFields = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_SPORT:
    console.log('DANS SELECT SPORT')
    return Object.assign({}, state, {
      sport: action.sport,
      training: '',
      exercise: ''
    })
    case types.SELECT_TRAINING:
    console.log('DANS SELECT TRAINING')
    return Object.assign({}, state, {
      sport: state.sport,
      training: action.training,
      exercise: ''
    })
    case types.SELECT_EXERCISE:
    console.log('DANS SELECT TRAINING')
    return Object.assign({}, state, {
      sport: state.sport,
      training: state.training,
      exercise: action.exercise
    })
    default:
    return state
  }
}

// export const selectedSport = createReducer('', {
//   [types.SELECT_SPORT](state, action) {
//     console.log('LE GROS STATE', state)
//     return action.sport
//   }
// })

// export const selectedTraining = createReducer('', {
//   [types.SELECT_TRAINING](state, action) {
//     console.log(state, action)
//     return action.training
//   }
// })