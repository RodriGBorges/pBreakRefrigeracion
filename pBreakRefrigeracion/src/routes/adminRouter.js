const router = require('express').Router();
const { vistaCrear } = require('../controllers/adminController');

/* ruta crear presupuesto */
router.get('/crear', vistaCrear);

module.exports = router;
