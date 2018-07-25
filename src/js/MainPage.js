import React, { Component } from 'react';
import Search from '../js/Search';
import BooksList from './BooksList';
import { getAll } from '../utils/BooksAPI';

import '../css/App.css';

class MainPage extends Component {
	state = {
		query: '',
		books: [],
		currentBooks: []
		// shelf: ['currentlyReading', 'wantToRead', 'read'],
	}
	componentDidMount(query) {

		getAll(query).then((books) => {
			this.setState({ currentBooks: books });
		});
	}
	render() {

		let currentBooks = this.state.currentBooks;
		let books = this.props;

		return (
			<main>
				< Search />

				<section id="currently-reading" className="shelf">
					<h2 className="shelf-heading">Currently Reading</h2>
					<ul className="books-list">
						{currentBooks.map((books) => (
							<li key={books.id} className="book-item">

								{books.shelf === 'currentlyReading' && (
									<BooksList
										books={books}
									/>
								)}

							</li>
						))}
					</ul>
				</section>

				<section id="want-to-read" className="shelf">
					<h2 className="shelf-heading">Want To Read</h2>
					<ul className="books-list">
						{currentBooks.map((books) => (
							<li key={books.id} className="book-item">
								{books.shelf === 'wantToRead' && (
									<BooksList
										books={books}
									/>
								)}
							</li>
						))}
					</ul>
				</section>

				<section id="read" className="shelf">
					<h2 className="shelf-heading">Read</h2>
					<ul className="books-list">
						{currentBooks.map((books) => (
							<li key={books.id} className="book-item">
								{books.shelf === 'read' && (
									<BooksList
										books={books}
									/>
								)}
							</li>
						))}
					</ul>
				</section>

			</main>
		);
	}
}

export default MainPage;