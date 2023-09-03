const pro = require('../controller/pro.controller')

module.exports = app => {
	app.post('/api/pro', pro.create);
	app.get('/api/pro', pro.getAll);
	app.get('/api/pro/:id', pro.getOne);
	app.patch('/api/pro/:id', pro.update);
	app.delete('/api/pro/:id', pro.delete);
}