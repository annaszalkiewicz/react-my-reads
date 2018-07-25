import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './js/Header';
import Footer from './js/Footer';
import MainPage from './js/MainPage';
import SearchPage from './js/SearchPage';
import './css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Route exact
					path="/"
					render={() => (
						<MainPage/>
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