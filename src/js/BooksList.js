import React, { Component } from 'react';
import Shelf from './Shelf';
import Modal from 'react-modal';
import '../img/info-icon.svg';
import '../css/App.css';

class BooksList extends Component {

	constructor(props) {
		super(props);

		this.state = {
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
		const { book, changeShelf, currentShelf } = this.props;

		return (
			<div className="book-container">
				<div className="image-container">
					<img src={book.imageLinks.thumbnail} alt="Cover Page" className="book-image" />
				</div>
				<div className="book-description">
					<h2 className="book-author">{book.authors.join(', ')}</h2>
					<h2 className="book-title">{book.title}</h2>
					<div className="buttons-container">
						<button className="details" onClick={this.openModal}>
							<i className="material-icons info-icon">info</i>
						</button>
						<Modal
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							contentLabel="onRequestClose Example"
							className="Modal"
							overlayClassName="Overlay"
						>
							<button className="close-button" onClick={this.closeModal}>
								<i className="material-icons">close</i>
							</button>
							<div className="details-container">
								<div className="details-left">
									<div className="details-image-container">
										<img src={book.imageLinks.thumbnail} alt="Cover Page" className="details-image" />
									</div>
									<h2 className="category">{book.categories}</h2>
									<span className="rating">Rating: {book.averageRating}</span>
									<button className="preview"><a target="_blank" href={book.previewLink}>View Preview</a></button>
									
										
									
								</div>
								<div className="details-right">
									<h2 className="details-header">{book.title}</h2>
									<h3 className="details-subtitle">{book.subtitle}</h3>

									<table className="details-table">
										<tbody>
											<tr>
												<td className="table-title">Author:</td>
												<td>{book.authors.join(', ')}</td>
											</tr>
											<tr>
												<td className="table-title">Publisher:</td>
												<td>{book.publisher}</td>
											</tr>
											<tr>
												<td className="table-title">Published:</td>
												<td>{book.publishedDate}</td>
											</tr>
											<tr>
												<td className="table-title">Pages:</td>
												<td>{book.pageCount}</td>
											</tr>
											<tr>
												<td className="table-title">Language:</td>
												<td>{book.language}</td>
											</tr>
										</tbody>
									</table>

								</div>
							</div>
							<div className="description">{book.description}</div>

						</Modal>

						<Shelf
							book={book}
							changeShelf={changeShelf}
							currentShelf={currentShelf}
						/>
					</div>
				</div>
			</div>

		);
	}
}

export default BooksList;