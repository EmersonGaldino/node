const db = require('../../config/dataBase');
const livrosDao = require('../../app/infra/livro-dao');
const usuariosDao = require('../infra/usuarios-dao');
module.exports = (app) =>{
    app.get('/',function(req,resp){
      const livroDao = new livrosDao(db);

      livroDao.lista()
      .then(livros => resp.marko(
        require('../views/livros/list/list.marko'),
        {
          livros:livros
        })
        )
        .catch(error => console.log(error))
    });
    
    app.get('/usuarios',function(req,resp){
      const usuarioLista = new usuariosDao(db);

      usuarioLista.listar()
      .then(users => resp.json(
        {Retorno: users})
        )
        .catch(error => console.log('erro ao lsitar usuarios'))
      });

     app.get('/testes/',function(req,resp){
       require('../../testes/index.html');
     })
}
