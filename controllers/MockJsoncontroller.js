// MockJsonsControllers.js
const MockJson = require('../models/MockJson');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		MockJson.find(req.query)
			.then(MockJsons => res.json(MockJsons))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		MockJson.findById(req.params.id)
			.then(MockJson => res.json(MockJson))
			.catch(err => res.status(422).json(err));
	},
	findByIdAndReturnJson: function(req, res) {
		MockJson.findById(req.params.id)
			.then(MockJson => res.json(JSON.parse(MockJson.json)))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		MockJson.create(req.body)
			.then(newMockJson => res.json(newMockJson))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		MockJson.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(MockJson => res.json(MockJson))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		MockJson.findById({ _id: req.params.id })
			.then(MockJson => MockJson.remove())
			.then(allMockJsons => res.json(allMockJsons))
			.catch(err => res.status(422).json(err));
	}
};