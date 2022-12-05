const bcrypt = require('bcryptjs');
const usuarios = require('../data/usuarios.json');
const { validationResult } = require('express-validator');

module.exports = {

    vistaLogin: (req, res) => {
        res.render('user/login');
    },
    login: (req, res) => {
        const loginErrors = validationResult(req);

        if (loginErrors.isEmpty()) {
            const { usuario, contraseña } = req.body;
            
            const usuarioAdmin = usuarios.find( e => e.id === 1);
            if (usuario == usuarioAdmin.user && bcrypt.compareSync(contraseña, usuarioAdmin.password)) {
                req.session.adminLogueado = usuarioAdmin;
                req.body.recordarme !== undefined ? res.cookie('recordarUsuario', usuario, { maxAge: 60*1000*60*24 }) : null;

                res.redirect('/');
            } else {
                res.render('user/login', { errorLogin: "Usuario o contraseña incorrectos", oldData: req.body });
            }

        } else {
            res.render('user/login', { errors: loginErrors.mapped(), oldData: req.body });
        }
    },
    cerrarSesion: (req, res) => {
        res.clearCookie('recordarUsuario');
        req.session.destroy();

        res.redirect('/user/login');
    }

}

