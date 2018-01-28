import * as types from '../actions/types'

export const selectedFields = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_SPORT:
    return Object.assign({}, state, {
      sport: { field: action.sport, flex: 5 },
      training: { field: '', flex: 5 },
      exercise: { field: '', flex: 0 }
    })
    case types.SELECT_TRAINING:
    return Object.assign({}, state, {
      sport: { ...state.sport, flex: 2 },
      training: { field: action.training, flex: 3 },
      exercise: { field: '', flex: 5 }
    })
    case types.SELECT_EXERCISE:
    return Object.assign({}, state, {
      sport: { ...state.sport, flex: 2 },
      training: { ...state.training, flex: 3 },
      exercise: { field: action.exercise, flex: 5 }
    })
    default:
    return state
  }
}