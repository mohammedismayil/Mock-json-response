// server.js
const express = require('express');
const app = express();
const path = require('path');
var cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 5000;

// require db connection
require("./models");
app.use(cors());
// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD THIS LINE
app.use(express.static('client/build'));

app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});