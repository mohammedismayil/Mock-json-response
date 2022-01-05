

const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const MockJsonRoutes = require('./MockJson');
const MockJsonController = require('../controllers/MockJsoncontroller');
router.use('/api/MockJsons', MockJsonRoutes);

router.get('/export',MockJsonController.exportJSON)
//default get method for returning json
router.get('/:id',MockJsonController.findByIdAndReturnJson)

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;