export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

// export default function reducer(state = { repos: {movies: []} }, action) {
export default function reducer(state = { bands: [] }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
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
    type: GET_BANDS,
    payload: {
      request: {
        url: `/bands`
      }
    }
  };
}
