export const GET_BANDS = 'bandzown.herokuapp.com/bands/LOAD';
export const GET_BANDS_SUCCESS = 'bandzown.herokuapp.com/bands/LOAD_SUCCESS';
export const GET_BANDS_FAIL = 'bandzown.herokuapp.com/bands/LOAD_FAIL';

// export default function reducer(state = { repos: {movies: []} }, action) {
export default function bandsReducer(state = { bands: [] }, action) {
  console.log('action type: %s', action.type);
  switch (action.type) {
    case GET_BANDS:
      return {
        ...state,
        loading: true,
        refreshing: true };
    case GET_BANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        refreshing: false,
        bands: action.payload.data };
    case GET_BANDS_FAIL:
      return {
        ...state,
        loading: false,
        refreshing: false,
        error: 'Error while fetching bands'
      };
    default:
      return state;
  }
}

export function listBands() {
  return {
    type: GET_BANDS,
    payload: {
      request: {
        url: '/bands'
      }
    }
  };
}
