import {
    GETLISTMOVIES,
    SEARCHMOVIES,
    GETMOVIESTRENDINGWEEKLY,
    GETNOWPLAYING,
    GETPOPULARMOVIES,
    GETTOPRATEDMOVIES,
    GETUPCOMINGMOVIES,
    GETDETAILMOVIES,
    GETREVIEWMOVIE
} from './TMDBTypes';

    const INITIAL_STATE = {
        listMovies: {},
        loading: true,
        detailMovie: {},
        review: {}
    };

    const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case GETLISTMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                };
            case SEARCHMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETMOVIESTRENDINGWEEKLY:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETNOWPLAYING:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETPOPULARMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETTOPRATEDMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETUPCOMINGMOVIES:
                return {
                    ...state,
                    listMovies: action.payload,
                    loading: action.loading
                }
            case GETDETAILMOVIES:
                return {
                    ...state,
                    detailMovie: action.payload,
                    loading: action.loading
                }
            case GETREVIEWMOVIE:
                return {
                    ...state,
                    review: action.payload,
                    loading: action.loading
                }
            default: // need this for default case
            return state
        }

    };

export default reducer;