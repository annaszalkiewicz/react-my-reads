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
			this.updateBooks();
		})
	}

	render() {
		const { books, query, foundBooks } = this.state;

		return (
			<div className="App">
				<Header/>
				<Route exact
					path={process.env.PUBLIC_URL + "/"}
					render={() => (
						<MainPage
						books = {books}
						changeShelf = {this.changeShelf}
						/>
					)}
				/>
				<Route
					path={ process.env.PUBLIC_URL + "/search"}
					render={() => (
						<SearchPage
							books = {this.state.books}
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