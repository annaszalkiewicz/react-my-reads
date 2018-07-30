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

	componentDidMount = () => {
		this.updateBooks();
	}

	updateBooks = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		});
	}
	
	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
			{console.log(this.state.books)}
			this.updateBooks();
		})
	}

	render() {
		const { books, query, foundBooks } = this.state;

		return (
			<div className="App">
				<Header/>
				<Route exact
					path="/"
					render={() => (
						<MainPage
						books = {books}
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