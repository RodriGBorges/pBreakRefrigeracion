const router = require('express').Router();
const { vistaCrear, vistaEditar, crearPresupuesto, editarPresupuesto, eliminarPresupuesto } = require('../controllers/adminController');
const adminCheck = require('../middlewares/adminCheck');
const createValidator = require('../middlewares/createValidator');


/* ruta crear presupuesto */
router.get('/crear', adminCheck, vistaCrear);
router.get('/editar/:id', adminCheck, vistaEditar);

router.post('/crear', adminCheck, createValidator, crearPresupuesto);
router.put('/editar/:id', adminCheck, createValidator, editarPresupuesto);

router.delete('/editar/:id', adminCheck, eliminarPresupuesto);

module.exports = router;
