import { GETLISTMOVIES, SEARCHMOVIES, GETMOVIESTRENDINGWEEKLY, GETNOWPLAYING, GETPOPULARMOVIES, GETTOPRATEDMOVIES, GETUPCOMINGMOVIES } from './TMDBTypes';
import { getListMoviesURL, getSearchMovies, getMovieTrendingWeekly, getNowPlaying, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../global/constant/config';
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

export const getMoviesTrendingWeekly = () => {
	let loading = true;
	return(dispatch) => {
		axios.get(getMovieTrendingWeekly).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETMOVIESTRENDINGWEEKLY,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};

export const getMoviesPlayingNow = (pageId) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getNowPlaying(pageId)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETNOWPLAYING,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};

export const getMoviesPopular = (pageId) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getPopularMovies(pageId)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETPOPULARMOVIES,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};


export const getMoviesTopRated = (pageId) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getTopRatedMovies(pageId)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETTOPRATEDMOVIES,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};

export const getMoviesUpcoming = (pageId) => {
	let loading = true;
	return(dispatch) => {
		axios.get(getUpcomingMovies(pageId)).then(res => {
			if (res  && res.data) {
				loading = false;
				dispatch({
					type: GETUPCOMINGMOVIES,
					payload: res.data,
					loading:loading
				});
			}
		});
	}
};