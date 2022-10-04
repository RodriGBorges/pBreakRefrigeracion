const router = require('express').Router();
const { detail } = require('../controllers/detailController');


/* ruta detalle de presupuesto */
router.get('/:id', detail);

module.exports = router;