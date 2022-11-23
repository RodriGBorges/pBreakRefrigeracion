const router = require('express').Router();
const { vistaCrear, vistaEditar, crearPresupuesto } = require('../controllers/adminController');

/* ruta crear presupuesto */
router.get('/crear', vistaCrear);
router.get('/editar/:id', vistaEditar);

router.post('/crear', crearPresupuesto);

module.exports = router;
