const router = require('express').Router();
const { home } = require('../controllers/indexController');


/* ruta home */
router.get('/', home);

module.exports = router;
