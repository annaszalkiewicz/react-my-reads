import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { search, getAll } from '../utils/BooksAPI';
import '../css/App.css';

class SearchPage extends Component {

  state = {
    books: [],
    query: '',
    foundBooks: [],
  }
  componentDidMount = (query) => {
    getAll(query).then((books) => {
      this.setState({ books });
    });
  }
  updateQuery = (query) => {
    this.setState({ query: query });

    if (query) {
      search(query).then((foundBooks) => {
        if (foundBooks.length) {
          this.setState({foundBooks})
        }
        else {
          this.setState({foundBooks: []});
        }
      })
    }
    else {
      this.setState({foundBooks: []});
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }
  render() {
    let query = this.state.query;
    let foundBooks = this.state.foundBooks;

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
              {foundBooks.map((book) => (
                <li key={book.id}>
                  {book.title}
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

export default SearchPage;