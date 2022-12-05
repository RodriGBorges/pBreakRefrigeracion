const router = require('express').Router();
const { detail } = require('../controllers/detailController');
const adminCheck = require('../middlewares/adminCheck');


/* ruta detalle de presupuesto */
router.get('/:id', adminCheck, detail);

module.exports = router;