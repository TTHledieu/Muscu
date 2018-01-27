import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const selectedSport = createReducer('', {
  [types.SELECT_SPORT](state, action) {
    return action.sport
  }
})