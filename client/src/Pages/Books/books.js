import React, { Component } from 'react';

import API from '../../Utils/API';

class Books extends Component {
	state = {
		books: [],
		title: '',
		author: ''
	};

	componentDidMount() {
		this.loadBooks();
	}

	loadBooks = () => {
		API.getBooks()
			.then(res => this.setState({ books: res.data, title: '', author: '' }))
			.catch(err => console.log(err));
	};

	deleteBook = id => {
		API.deleteBook(id)
			.then(res => this.loadBooks())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.author) {
			API.saveBook({
				title: this.state.title,
				author: this.state.author
			})
				.then(res => this.loadBooks())
				.catch(err => console.log(err));
		}
	};

	render() {
		return (
		
							<><h1>What Books Should I Read?</h1><form>
                <input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)" />
                <input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)" />

                <button
                    disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                >
                    Submit Book
                </button>
            </form><h1>Books On My List</h1></>

					
		);
	}
}

export default Books;
