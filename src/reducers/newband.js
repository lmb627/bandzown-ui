export const POST_BAND = 'bandzown.herokuapp.com/bands/POST';
export const POST_BAND_SUCCESS = 'bandzown.herokuapp.com/bands/POST_SUCCESS';
export const POST_BAND_FAIL = 'bandzown.herokuapp.com/bands/POST_FAIL';

// export default function reducer(state = { repos: {movies: []} }, action) {
export default function bandsReducer(state = { bands: [] }, action) {
  console.log("action type: %s", action.type);
  switch (action.type) {
    case POST_BAND:
      return { ...state, loading: true };
    case POST_BAND_SUCCESS:
      return { ...state, loading: false, bands: action.payload.data };
    case POST_BAND_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching bands'
      };
    default:
      return state;
  }
}

export function listBands(user) {
  return {
    type: POST_BAND,
    payload: {
      request: {
        url: `/bands`
      }
    }
  };
}
