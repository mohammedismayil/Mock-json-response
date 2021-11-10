

const router = require('express').Router();
const path = require('path');
const bookRoutes = require('./books');
const booksController = require('../controllers/bookscontroller');
router.use('/api/books', bookRoutes);


//default get method for returning json
router.get('/:id',booksController.findByIdAndReturnJson)

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
module.exports = router;