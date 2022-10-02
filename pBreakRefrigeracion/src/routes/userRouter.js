const router = require('express').Router();
const { login } = require('../controllers/userController');


/* ruta login */
router.get('/login', login);

module.exports = router;
