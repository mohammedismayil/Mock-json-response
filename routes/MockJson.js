// books.js

const router = require('express').Router();
const MockJsonController = require('../controllers/MockJsoncontroller');

router
	.route('/')
	.get(MockJsonController.findAll)
	.post(MockJsonController.create);

router.route("/deleteAllMocks").get(MockJsonController.removeAllMocks);

router
	.route('/:id')
	.get(MockJsonController.findById)
	.put(MockJsonController.update)
	.delete(MockJsonController.remove);

module.exports = router;