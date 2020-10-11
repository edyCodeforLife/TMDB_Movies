export const TMDB_API_KEY = 'babef280b94d6ee7ca90d8fce5ec02a3';

export const BEARER_TOKEN_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWJlZjI4MGI5NGQ2ZWU3Y2E5MGQ4ZmNlNWVjMDJhMyIsInN1YiI6IjVmN2ZlOTE5NjJlODZmMDAzN2RlYTMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eP_QHXLX6WEuS-D_Z4XN8k3VqWkaTuOBOnPg2O2qW-M';

export const getListMoviesURL = `
https://api.themoviedb.org/3/list/${1}?api_key=${TMDB_API_KEY}&language=en-US`

export default function getImagePath(path) {
	return `https://image.tmdb.org/t/p/w500${path}`
}
