module.exports = function (application) {

	application.get('/autores', function (req, res) {
		application.app.controllers.autores.autores(application, req, res);
	});

	application.get('/autor', function (req, res) {
		application.app.controllers.autores.autor(application, req, res);
	});

};