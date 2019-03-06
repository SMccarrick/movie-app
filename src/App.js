// Component is just a part of the react object
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

/*
	Map takes an array modifies the data then outputs a new array first praramter of map is going to be a arrow function
 */
class App extends Component {
	// Set default state of movies to a blank array
	// if the data doesnt come in its just a blank array
	state = {
		movies: []
	};

	// Fetch data from the API
	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=82256ccb86ef4724263776404ecfb09c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movies = await res.json();

			this.setState({
				movies: movies.results
			});
		} catch (e) {
			console.log('error', e);
		}
	}

	render() {
		const { movies } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				{movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
		);
	}
}

export default App;
