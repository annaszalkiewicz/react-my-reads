import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './js/Header';
import Footer from './js/Footer';
import MainPage from './js/MainPage';
import SearchPage from './js/SearchPage';
import * as BooksAPI from '../src/utils/BooksAPI'
import './css/App.css';

class App extends Component {
	state = {
		books: [],
		foundBooks: [],
		query: ''
	}

	componentDidMount = (query) => {
	  BooksAPI.getAll(query).then((books) => {
	  this.setState({ books });
	  });
	}

	render() {
		let books = this.state.books;
		let foundBooks = this.state.foundBooks;
		let query =  this.state.query;
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
						<SearchPage
							books = {books}
							foundBooks = {foundBooks}
							query = {query}
						/>
					)}
				/>
				<Footer/>
			</div>
		);
	}
}

export default App;