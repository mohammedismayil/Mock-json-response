// models/index.js

const mongoose = require('mongoose');
// const URI = require('../config/index');

mongoose.connect(
  "mongodb+srv://ismayil:ismayil10@cluster0.uossk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});