//const clientes = require('../data/clientes.json');
//const trabajos = require('../data/trabajos.json');

module.exports = {
    home: (req, res) => {
        res.render('index', { title: 'Presupuestos BreakR' });
    }
}