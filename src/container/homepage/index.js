import React, { useEffect, useCallback, useState, useRef } from "react";
import "../../components/app.scss";
import { useSelector, useDispatch } from "react-redux";
import ScreenHomePage from './screen';
import {
	getListMoviesTMDB,
  } from "../../redux/TMDB_API/TMDBActions";

function _HomePage(props) {
	const state = useSelector(state => state.tmdbList);
	const dispatch = useDispatch();

	console.log(state)
	useEffect(() => {
		dispatch(getListMoviesTMDB());
	}, []);

	return (
		<React.Fragment>
			<ScreenHomePage
				listMovies={state.listMovies}
				loading={state.loading}
			/>
		</React.Fragment>
	)
}

export const HomePage = React.memo((_HomePage));
