import {combineReducers} from 'redux'
import {discoverReducer} from '../redux/homeReducer'
import { moviesReducer } from './movies_reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  discover: discoverReducer,
})