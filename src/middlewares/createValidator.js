const { check } = require('express-validator');

const createValidator = [
    check('telefonoCliente')
        .isInt().optional({checkFalsy: true}),
    check('nPresupuesto')
        .isInt().optional({checkFalsy: true}),
    check('precio0')
        .isInt().optional({checkFalsy: true}),
    check('precio1')
        .isInt().optional({checkFalsy: true}),
    check('precio2')
        .isInt().optional({checkFalsy: true}),
    check('precio3')
        .isInt().optional({checkFalsy: true}),
    check('precio4')
        .isInt().optional({checkFalsy: true}),
    check('precio5')
        .isInt().optional({checkFalsy: true}),
    check('precio6')
        .isInt().optional({checkFalsy: true}),
    check('precio7')
        .isInt().optional({checkFalsy: true}),
    check('precio8')
        .isInt().optional({checkFalsy: true}),
    check('precio9')
        .isInt().optional({checkFalsy: true}),
    check('precio10')
        .isInt().optional({checkFalsy: true}),
    check('precio11')
        .isInt().optional({checkFalsy: true}),
]

module.exports = createValidator;