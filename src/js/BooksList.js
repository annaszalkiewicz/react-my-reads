import React, { Component } from 'react';
import { get } from '../utils/BooksAPI';
import '../css/App.css';

class BooksList extends Component {
  state = {
    books: [],
    foundBooks: []
  }
  render() {
    let books = this.state.books;

    return (
      <div className="book-container">
        <div className="image-container">
          <img src={books.imageLinks.thumbnail} alt="Cover Page" className="book-image" />
        </div>
        <div className="book-description">
          <h2 className="book-author">{books.authors}</h2>
          <h2 className="book-title">{books.title}</h2>
          <div className="buttons-container">
            <button className="reset">
              <i className="material-icons view-details">info</i>
            </button>
            <button className="reset">
              <i className="material-icons more">more_vert</i>
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default BooksList;