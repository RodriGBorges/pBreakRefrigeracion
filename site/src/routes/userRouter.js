const router = require('express').Router();
const { vistaLogin, login, cerrarSesion } = require('../controllers/userController');
const loginValidator = require('../middlewares/loginValidator');


/* ruta login */
router.get('/login', vistaLogin);
router.post('/login', loginValidator, login);
router.get('/cerrarSesion', cerrarSesion);

module.exports = router;
