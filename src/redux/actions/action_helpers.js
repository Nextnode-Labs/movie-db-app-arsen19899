import axios from "axios";



function setFetchStatus(actionType, bool) {
  return {
    type: actionType,
    payload: bool
  };
}

export function fetchData(dispatch, url, successType, loadingType, errorType) {
  dispatch(setFetchStatus(loadingType, true));
  axios
    .get(url)
    .then(response => dispatch({ type: successType, payload: response.data }))
    .then(() => {
      dispatch(setFetchStatus(loadingType, false));
    })
    .catch(() => dispatch(setFetchStatus(errorType, true)));
}
