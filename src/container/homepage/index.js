import React, { useEffect, useCallback, useState, useRef } from "react";
import "../../components/app.scss";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ScreenHomePage from './screen';
import { debounce } from 'lodash';
import {
	getListMoviesTMDB, searchMovies
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
				onHandleSearch={onHandleSearch}
			/>
		</React.Fragment>
	)
}

export const HomePage = React.memo((_HomePage));
