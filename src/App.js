import React, { Component } from 'react';
import Row from './Row/Row';
import Banner from './Banner/Banner';

const url = {
	fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US`,
	fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_network=123`,
	fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US`,
	fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_genres=28`,
	fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_genres=35`,
	fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_genres=27`,
	fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_genres=10749`,
	fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&with_genres=99`
}
export default class App extends Component {
	render() {
		return (
			 <>
		    	<Banner fetchUrl={url.fetchNetflixOriginals}/>
		    	<Row title={"Netflix Original"} fetchUrl={url.fetchNetflixOriginals}/>
		    	<Row title={"Trending"} fetchUrl={url.fetchTrending}/>
		    	<Row title={"Top Rated"} fetchUrl={url.fetchTopRated}/>
		    	<Row title={"Action"} fetchUrl={url.fetchActionMovies}/>
		    	<Row title={"Comedy"} fetchUrl={url.fetchComedyMovies}/>
		    	<Row title={"Horror"} fetchUrl={url.fetchHorrorMovies}/>
		    	<Row title={"Romance"} fetchUrl={url.fetchRomanceMovies}/>
		    	<Row title={"Documentaries"} fetchUrl={url.fetchDocumentaries}/>
		    </>
		);
	}
}
