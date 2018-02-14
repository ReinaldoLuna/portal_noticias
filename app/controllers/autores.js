module.exports.autores = function(application, req, res){
    var connection = application.config.dbConnection();
    var autoresModel = new application.app.models.AutorDAO(connection);

    autoresModel.getAutores(function(error, result){
        res.render("autores/autores", {autores : result});
    });
}

module.exports.autor = function(application, req, res){
    var connection = application.config.dbConnection();
    var autoresModel = new application.app.models.AutorDAO(connection);

    var id_autor = req.query;

    autoresModel.getAutor(id_autor, function(error, result){
        res.render("autores/autor", {autor : result});
    });
}