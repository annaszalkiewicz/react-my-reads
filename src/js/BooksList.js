import React, { Component } from 'react';
import Shelf from './Shelf';
import Modal from 'react-modal';
import '../img/info-icon.svg';
import '../css/App.css';

class BooksList extends Component {

	constructor() {
		super();

		this.state = {
			books: {},
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		let books = this.props.books;
		let changeShelf = this.props;

		return (
			<div className="book-container">
				<div className="image-container">
					<img src={books.imageLinks.thumbnail} alt="Cover Page" className="book-image" />
				</div>
				<div className="book-description">
					<h2 className="book-author">{books.authors.join(', ')}</h2>
					<h2 className="book-title">{books.title}</h2>
					<div className="buttons-container">
						<button className="details" onClick={this.openModal}>
							<i className="material-icons">info</i>
						</button>
						<Modal
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							contentLabel="onRequestClose Example"
							className="Modal"
							overlayClassName="Overlay"
						>
							<button onClick={this.closeModal}>close</button>
							<div className="details-container">
								<div className="details-left">
									<div className="details-image-container">
										<img src={books.imageLinks.thumbnail} alt="Cover Page" className="details-image" />
									</div>
									<h2 className="category">{books.categories}</h2>
									<span className="rating">Rating: {books.averageRating}</span>
									<a target="_blank" href={books.previewLink}>
										<button className="preview">View Preview</button>
									</a>
								</div>
								<div className="details-right">
									<h2 className="details-header">{books.title}</h2>
									<h3 className="details-subtitle">{books.subtitle}</h3>

									<table>
										<tbody>
											<tr>
												<td>Author:</td>
												<td>{books.authors.join(', ')}</td>
											</tr>
											<tr>
												<td>Publisher:</td>
												<td>{books.publisher}</td>
											</tr>
											<tr>
												<td>Published:</td>
												<td>{books.publishedDate}</td>
											</tr>
											<tr>
												<td>Pages:</td>
												<td>{books.pageCount}</td>
											</tr>
											<tr>
												<td>Language:</td>
												<td>{books.language}</td>
											</tr>
										</tbody>
									</table>

								</div>
							</div>
							<div className="description">{books.description}</div>

						</Modal>

						<Shelf
							books={books}
							changeShelf={changeShelf}
						/>
					</div>
				</div>
			</div>

		);
	}
}

export default BooksList;