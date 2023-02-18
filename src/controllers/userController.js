const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = {

    vistaLogin: (req, res) => {
        res.render('user/login');
    },
    login: (req, res) => {
        const loginErrors = validationResult(req);

        if (loginErrors.isEmpty()) {
            const { usuario, contraseña } = req.body;
            
            db.Usuario.findOne({
                where: {
                    nombreUsuario: usuario
                }
            })
            .then(usuario => {
                
                if (bcrypt.compareSync(contraseña, usuario.contraseña)) {
                    req.session.adminLogueado = usuario;
                    req.body.recordarme !== undefined ? res.cookie('recordarUsuario', usuario, { maxAge: 60*1000*60*24 }) : null;
    
                    res.redirect('/');
                } else {
                    res.render('user/login', { errorLogin: "Usuario o contraseña incorrectos", oldData: req.body });
                }

            })
            .catch(error => {
                res.render('user/login', { errorLogin: `${error}`, oldData: req.body });
            })

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

