const router = require('express').Router();
const { vistaLogin, login } = require('../controllers/userController');
const loginValidator = require('../middlewares/loginValidator');


/* ruta login */
router.get('/login', vistaLogin);
router.post('/login', loginValidator, login);

module.exports = router;
