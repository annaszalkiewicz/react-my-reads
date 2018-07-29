import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './js/Header';
import Footer from './js/Footer';
import MainPage from './js/MainPage';
import SearchPage from './js/SearchPage';
import * as BooksAPI from './utils/BooksAPI';
import './css/App.css';

class App extends Component {
	state = {
		books: [],
		foundBooks: [],
		currentBooks: [],
		query: ''
	}

	componentDidMount = (query) => {
	  BooksAPI.getAll(query).then((books) => {
	  this.setState({ books });
	  });
	}
	
	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ currentBooks: books })
})
	}

	render() {
		let books = this.state.books;
		let foundBooks = this.state.foundBooks;
		let currentBooks = this.state.currentBooks;
		let query =  this.state.query;

		return (
			<div className="App">
				<Header/>
				<Route exact
					path="/"
					render={() => (
						<MainPage
						currentBooks = {currentBooks}
						books = {books}
						query = {query}
						changeShelf = {this.changeShelf}
						/>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchPage
							books = {books}
							foundBooks = {foundBooks}
							query = {query}
							changeShelf = {this.changeShelf}
						/>
					)}
				/>	
				<Footer/>
			</div>
		);
	}
}

export default App;