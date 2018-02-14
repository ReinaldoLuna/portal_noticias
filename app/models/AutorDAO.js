function AutorDAO(connection) {
    this._connection = connection;
}

AutorDAO.prototype.getAutores = function (callback){
    this._connection.query('select * from autores order by id_autor desc', callback)
}

AutorDAO.prototype.getAutor = function(id_autor, callback){
    this._connection.query('select * from autores where id_autor ='+id_autor.id_autor, callback)
}

AutorDAO.prototype.salvarAutor = function(autor, callback){
    this._connection.query('insert into autores set ?', autor, callback);
}

module.exports = function(){
    return AutorDAO;
}