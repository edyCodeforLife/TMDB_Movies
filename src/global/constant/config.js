export const TMDB_API_KEY = 'babef280b94d6ee7ca90d8fce5ec02a3';

export const BEARER_TOKEN_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWJlZjI4MGI5NGQ2ZWU3Y2E5MGQ4ZmNlNWVjMDJhMyIsInN1YiI6IjVmN2ZlOTE5NjJlODZmMDAzN2RlYTMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eP_QHXLX6WEuS-D_Z4XN8k3VqWkaTuOBOnPg2O2qW-M';

export function getListMoviesURL(listId) {
	return `https://api.themoviedb.org/3/list/${listId}?api_key=${TMDB_API_KEY}&language=en-US`;
}

export function getSearchMovies(query) {
	return `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&include_adult=false`;
}

export function getImagePath(path) {
	return `https://image.tmdb.org/t/p/w500${path}`;
}
export const getMovieTrendingWeekly = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`;


export function getNowPlaying(pageId) {
	return `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=${pageId}`;
}

export function getPopularMovies(pageId) {
	return `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${pageId}`;
}

export function getTopRatedMovies(pageId) {
	return `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${pageId}`;
}

export function getUpcomingMovies(pageId) {
	return `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=${pageId}`;
}