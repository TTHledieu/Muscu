import * as types from './types'

export const selectSport = (selectedSport) =>  { 
  return { type: types.SELECT_SPORT, sport: selectedSport }
}