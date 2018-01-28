import * as types from './types'

export const selectSport = (selectedSport) =>  {
  return { type: types.SELECT_SPORT, sport: selectedSport }
}

export const selectTraining = (selectedTraining) =>  {
  return { type: types.SELECT_TRAINING, training: selectedTraining }
}

export const selectExercise = (selectedExercise) =>  {
  return { type: types.SELECT_EXERCISE, exercise: selectedExercise }
}