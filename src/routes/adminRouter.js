const router = require('express').Router();
const { vistaCrear, vistaEditar, crearPresupuesto, editarPresupuesto, eliminarPresupuesto } = require('../controllers/adminController');
const adminCheck = require('../middlewares/adminCheck');

/* ruta crear presupuesto */
router.get('/crear', adminCheck, vistaCrear);
router.get('/editar/:id', adminCheck, vistaEditar);

router.post('/crear', adminCheck, crearPresupuesto);
router.put('/editar/:id', adminCheck, editarPresupuesto);

router.delete('/editar/:id', adminCheck, eliminarPresupuesto);

module.exports = router;
