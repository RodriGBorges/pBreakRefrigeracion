const router = require('express').Router();
const { vistaCrear, vistaEditar, crearPresupuesto, editarPresupuesto } = require('../controllers/adminController');

/* ruta crear presupuesto */
router.get('/crear', vistaCrear);
router.get('/editar/:id', vistaEditar);

router.post('/crear', crearPresupuesto);
router.put('/editar/:id', editarPresupuesto);

module.exports = router;
