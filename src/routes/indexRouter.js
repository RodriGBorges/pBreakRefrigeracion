const router = require('express').Router();
const { home, buscarPresupuesto } = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');


/* ruta home */
router.get('/', adminCheck, home);
router.get('/buscar', adminCheck, buscarPresupuesto);

module.exports = router;
