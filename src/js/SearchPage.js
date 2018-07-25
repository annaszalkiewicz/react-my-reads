import React, { Component } from 'react';
import BooksList from './BooksList';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI'

import '../css/App.css';

class SearchPage extends Component {

  updateQuery = (query) => {
    this.setState({ query: query });

    if (query) {
      BooksAPI.search(query).then((foundBooks) => {
        if (foundBooks.length) {
          this.setState({ foundBooks })
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
    let query = this.props.query;
    let foundBooks = this.props.foundBooks;

		return (

			<main>
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
							{foundBooks.map((books) => (
								<li key={books.id} className="book-item">
									<BooksList
										books = {books}
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
	books: PropTypes.object.isRequired,
	foundBooks: PropTypes.array.isRequired,
	query: PropTypes.string.isRequired
};

export default SearchPage;