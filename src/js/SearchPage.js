import React, { Component } from 'react';
import BooksList from './BooksList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI'

import '../css/App.css';

class SearchPage extends Component {

	state = {
    query: '',
		books: [],
		foundBooks: [],
}

  updateQuery = (query) => {
    this.setState({ query: query });

    if (query) {
      BooksAPI.search(query).then((foundBooks) => {
        if (foundBooks.length) {
					this.setState({ foundBooks })
					foundBooks.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        }
        else {
          this.setState({ foundBooks: [] });
        }
      })
    }
    else {
      this.setState({ foundBooks: [] });
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

	render() {
		const { query, foundBooks } = this.state;

		return (

			<main>
				<Link
					to='/'
					className='close-search'
				>
					<i className="material-icons arrow-back">arrow_back</i>
				</Link>
				<form className="search-form">
					<label htmlFor="search-input" className="input-label">Look for new book:</label>
					<input
						type="text"
						id="search-input"
						className="search-input"
						placeholder="Seach by author or title"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value, foundBooks)}
					/>
				</form>

				{foundBooks.length !== 0 && query.length !== 0 && (
					<section id="found-books" className="found-books">
						<ul className="books-list">
							{foundBooks.map((book) => (
								<li key={book.id} className="book-item">
									<BooksList
										book = {book}
									/>
								</li>
							))}
						</ul>
					</section>
				)}

				{foundBooks.length === 0 && query.length !== 0 && (
					<div className="no-found">
						<p>Sorry, no book found :(</p>
					</div>
				)}

			</main>
		);
	}

}

SearchPage.propTypes = {
	books: PropTypes.array.isRequired,
	foundBooks: PropTypes.array.isRequired,
	query: PropTypes.string.isRequired
};

export default SearchPage;