import React, { useEffect, useCallback, useState, useRef } from "react";
import "../../components/app.scss";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { debounce } from 'lodash';
import ScreenHomePage from './screen';
import { QrsToObj } from '../../global/function/index';
import { getMovieDetail, getMovieReview } from "../../redux/TMDB_API/TMDBActions";

function _DetailMovies(props) {
	const state = useSelector(state => state.tmdbList, shallowEqual);
	const dispatch = useDispatch();
	console.log(state.review)
	useEffect(() => {
		let qrs = QrsToObj(window.location.search);
		dispatch(getMovieDetail(qrs.movie_id));
		dispatch(getMovieReview(qrs.movie_id));
	}, []);

	const redirectLink = (url) => {
		if (url) {
			let win = window.open(url, '_blank');
			win.focus();
		}
	}

	return (
		<React.Fragment>
			<ScreenHomePage
				detailMovie={state.detailMovie}
				reviewMovie={state.review}
				redirectLink={redirectLink}
			/>
		</React.Fragment>
	)
}

export const DetailMovies = React.memo((_DetailMovies));
