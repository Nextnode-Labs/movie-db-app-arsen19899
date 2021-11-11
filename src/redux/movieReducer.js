import {FETCH_MOVIES} from "./types";

const initialState = {
    searchQuery: '',
    fetchedMovies: [],
    page: 1,
}
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, fetchedMovies: action.payload }
        default: return state
    }
}