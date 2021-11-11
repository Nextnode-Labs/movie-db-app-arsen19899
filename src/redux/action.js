import {FETCH_MOVIES} from "./types";
import {BASE_PATH,POPUL,API_KEY,PAGE_PARAM} from "./constant";

export function fetchedMovies(searchQuery, page) {
    return async dispatch => {
        try {

            const response = await fetch(`${BASE_PATH}${POPUL}${API_KEY}&${PAGE_PARAM}${page}`)
            const json = await response.json()
             dispatch({ type: FETCH_MOVIES, payload: json })

        } catch (e) {

        }
    }
}