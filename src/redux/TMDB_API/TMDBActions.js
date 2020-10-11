import { GETLISTMOVIES, SEARCHMOVIES } from './TMDBTypes';
import { getListMoviesURL, getSearchMovies } from '../../global/constant/config';
import axios from 'axios';

export const getListMoviesTMDB = (pageId) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getListMoviesURL(pageId)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETLISTMOVIES,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};

export const searchMovies = (query) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getSearchMovies(query)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: SEARCHMOVIES,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};