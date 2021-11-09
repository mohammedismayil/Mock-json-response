import React, { Component } from 'react';

import API from '../../Utils/API';

class Books extends Component {
	state = {
		books: [],
		title: '',
		author: '',
		createdID:'',
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


	reloadInputs = (data) => {
		this.setState({
		   title: '',
		   author: '',
		   createdID:data._id,
		})


	}
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.author) {
			API.saveBook({
				title: this.state.title,
				author: this.state.author
			})
				.then(res => this.reloadInputs(res.data))
				.catch(err => console.log(err));
		}
	};

	render() {
		return (
		<div>
	<h1>What Books Should I Read?</h1>
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

{/* <a href={http://localhost:3000/{this.state.createdID}>http://localhost:3000/{this.state.createdID}</a> */}
				
		</div>
						


					
		);
	}
}

export default Books;
