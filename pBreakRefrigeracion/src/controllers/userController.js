const bcrypt = require('bcryptjs');
let usuarios = require('../data/usuarios.json');

module.exports = {

    vistaLogin: (req, res) => {
        res.render('user/login');
    },
    login: (req, res) => {
        
    }

}

