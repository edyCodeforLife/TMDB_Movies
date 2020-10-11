import { combineReducers } from 'redux';
import moviesReducer from './TMDB_API/TMDBReducer';

const rootReducer = combineReducers({
	tmdbList: moviesReducer,
});

export default rootReducer;