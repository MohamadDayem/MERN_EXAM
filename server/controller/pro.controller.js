const pro = require('../models/pro.model');

module.exports = {
	create: (req, res) => {
	pro.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	getAll: (req, res) => {
		pro.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	getOne: (req, res) => {
		pro.findById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	update: (req, res) => {
		pro.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	delete: (req, res) => {
		pro.findByIdAndDelete(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
};