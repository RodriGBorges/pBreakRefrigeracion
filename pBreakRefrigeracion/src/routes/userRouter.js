const router = require('express').Router();
const { vistaLogin, login } = require('../controllers/userController');


/* ruta login */
router.get('/login', vistaLogin);
router.post('/login', login);

module.exports = router;
