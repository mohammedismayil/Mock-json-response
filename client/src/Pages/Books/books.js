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
console.log(this.state.createdID);

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
		const createdID = this.state.createdID;
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
               
                {
                  createdID.length > 0 ? 
					  <div>
					  <h2>Check out your mock json here:
					  </h2>
					   <a href={"http://localhost:5000/"+this.state.createdID+"/"} target="_blank" rel="noreferrer noopener">
							 http:localhost:3000/{this.state.createdID}
					   </a>
					  </div>
	                :
					<div></div>
					// href={"http:localhost:3000/"+this.state.createdID

				}

                          

				
		</div>
						


					
		);
	}
}

export default Books;
