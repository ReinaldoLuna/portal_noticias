module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Titulo é obrigatório!').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório!').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres!').len(10, 100);
    req.assert('autor', 'Autor é obrigatório!').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória!').notEmpty();
    req.assert('data_noticia', 'Formato de data inválido').isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Noticia é obrigatória!').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}

module.exports.formulario_inclusao_autor = function (application, req, res) {
    res.render("admin/form_add_autor", { validacao: {}, autor: {} });
}

module.exports.autores_salvar = function(application, req, res){
    var autor = req.body;

    req.assert('nome', 'Nome é obrigatório!').notEmpty();
    req.assert('sobrenome', 'Sobrenome é obrigatório!').notEmpty();
    req.assert('data_nascimento', 'Data de nascimento é obrigatório!').notEmpty();
    req.assert('data_nascimento', 'Formato de data inválido').isDate({format: 'YYYY-MM-DD'});
    req.assert('profissao', 'Profissao é obrigatório!').notEmpty();
    
    var erros = req.validationErrors();
    
    if(erros){
        res.render('admin/form_add_noticia', { validacao: erros, autores: autor});
        return;
    }

    var connection = application.config.dbConnection();
    var autoresModel = new application.app.models.AutorDAO(connection);

    autoresModel.salvarAutor(autor, function (error, result) {
        res.redirect('/autores');
    });

}