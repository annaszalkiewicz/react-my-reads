import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './js/Header';
import Search from './js/Search';
import Footer from './js/Footer';
import SearchPage from './js/SearchPage';
import './css/App.css';
// import BooksList from './js/bookList.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Route exact
					path="/"
					render={() => (
						<Search/>
						// <main className="container"></main>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchPage/>
					)}
				/>
				<Footer/>
			</div>
		);
	}
}

export default App;