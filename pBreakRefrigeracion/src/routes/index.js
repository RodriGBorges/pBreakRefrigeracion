const router = require('express').Router();
const { home } = require('../controllers/indexController');


/* GET home page. */
router.get('/', home);

module.exports = router;
