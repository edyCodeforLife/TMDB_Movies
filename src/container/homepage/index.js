import React, { useEffect, useCallback, useState, useRef } from "react";
import "../../components/app.scss";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ScreenHomePage from './screen';
import { debounce } from 'lodash';
import {
	getListMoviesTMDB,
	searchMovies,
	getMoviesTrendingWeekly,
	getMoviesPlayingNow,
	getMoviesPopular,
	getMoviesTopRated,
	getMoviesUpcoming
} from "../../redux/TMDB_API/TMDBActions";

function _HomePage(props) {
	const state = useSelector(state => state.tmdbList, shallowEqual);
	const [ activeSearch , setActiveSearch ] = useState(false);
	const [ pageId, setPageId ] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListMoviesTMDB(pageId));
	}, []);

	const onChangePage = (page) => {
		setPageId(page);
		setActiveSearch(false);
		setTimeout(() => {
			window.scrollTo(0,0);
		}, 200);
	}

	const searchMoviesData = (value) => {
		return debounce(searchMovies(value),300);
	}

	const onHandleSearch = (e) => {
		if (e.target.value === "") {
			setActiveSearch(false);
			dispatch(getListMoviesTMDB(pageId));
		} else {
			setActiveSearch(true);
			dispatch(searchMoviesData(e.target.value));
		}
	}

	const listType = ['Weekly Trending Movies', 'Now Playing', 'Popular', 'Top Rated', 'Upcoming']

	const getAll = () => {
		setActiveSearch(false);
		dispatch(getListMoviesTMDB(pageId));
	}

	const onSelectedFilter = (value) => {
		setActiveSearch(true);
		switch(value) {
			case 'Weekly Trending Movies':
				return dispatch(getMoviesTrendingWeekly());
			case 'Now Playing':
				return dispatch(getMoviesPlayingNow(pageId));
			case 'Popular':
				return dispatch(getMoviesPopular(pageId));
			case 'Top Rated':
				return dispatch(getMoviesTopRated(pageId));
			case 'Upcoming':
				return dispatch(getMoviesUpcoming(pageId));
			default:
				setActiveSearch(false);
				dispatch(getListMoviesTMDB(pageId));
		}
	}

	useEffect(() => {
		dispatch(getListMoviesTMDB(pageId));
	  }, [pageId]);

	return (
		<React.Fragment>
			<ScreenHomePage
				listMovies={!activeSearch ? state.listMovies.items : state.listMovies.results}
				loading={state.loading}
				onChangePage={onChangePage}
				currentPage={pageId}
				getAll={getAll}
				listType={listType}
				onSelectedFilter={onSelectedFilter}
				onHandleSearch={onHandleSearch}
			/>
		</React.Fragment>
	)
}

export const HomePage = React.memo((_HomePage));
