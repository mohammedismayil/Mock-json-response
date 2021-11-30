// Books.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mockjsonsSchema = new Schema({

	json: {
		type: String,
		required: true
	}
});

const MockJsons = mongoose.model('MockJsons', mockjsonsSchema);

module.exports = MockJsons;