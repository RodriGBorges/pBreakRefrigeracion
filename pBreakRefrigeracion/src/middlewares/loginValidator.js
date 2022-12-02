const { check } = require('express-validator');

const loginValidator = [
    check('usuario')
        .notEmpty().withMessage('El campo usuario es obligatorio.'),
    check('contraseña')
        .notEmpty().withMessage('El campo contraseña es obligatorio.')
]

module.exports = loginValidator;