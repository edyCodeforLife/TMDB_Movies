import { GETLISTMOVIES } from './TMDBTypes';

    const INITIAL_STATE = {
        listMovies: {},
        loading: true
    };

    const reducer = (state = INITIAL_STATE, action) => {
        console.log(action)
        switch (action.type) {
            case GETLISTMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                };
            default: // need this for default case
            return state
        }

    };

export default reducer;