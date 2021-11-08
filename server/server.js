// server.js
import express, { urlencoded, json } from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
app.use(urlencoded({ extended: true }));
app.use(json());

// routes
app.get('/', (req, res) => {
	res.send('Hello from MERN');
});

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});