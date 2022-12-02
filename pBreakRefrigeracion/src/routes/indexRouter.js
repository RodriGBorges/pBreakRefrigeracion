const router = require('express').Router();
const { home } = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');


/* ruta home */
router.get('/', adminCheck, home);

module.exports = router;
