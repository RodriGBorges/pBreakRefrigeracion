const router = require('express').Router();
const { vistaCrear, vistaEditar } = require('../controllers/adminController');

/* ruta crear presupuesto */
router.get('/crear', vistaCrear);
router.get('/editar/:id', vistaEditar);

module.exports = router;
