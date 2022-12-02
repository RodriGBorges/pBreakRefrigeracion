const usuarios = require('../data/usuarios.json');

const recordarme = (req, res , next) =>{
    if(req.cookies.recordarUsuario && req.session.usuarioLogueado === undefined) {
        req.session.adminLogueado = usuarios.find(e => e.user === req.cookies.recordarUsuario)
    }
    next()
}

module.exports = recordarme;