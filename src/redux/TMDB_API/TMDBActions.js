import { GETLISTMOVIES } from './TMDBTypes';
import { getListMoviesURL } from '../../global/constant/config';
import axios from 'axios';

export const getListMoviesTMDB = () => {
	let loading = true;
	return(dispatch) => {
		axios.get(getListMoviesURL).then(res => {
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