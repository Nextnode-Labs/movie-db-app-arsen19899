import {combineReducers} from 'redux'
import {discoverReducer} from '../redux/homeReducer'
import { moviesReducer } from './movies_reducer'
import {topReducer} from './topReducer'
import { upReducer } from './upReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  top: topReducer,
  discover: discoverReducer,
  up: upReducer,
})