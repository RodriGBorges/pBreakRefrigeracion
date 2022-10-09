const clientes = require('../data/clientes.json');
const trabajos = require('../data/trabajos.json');

module.exports = {
    detail: (req, res) => {
        const {id} = req.params;
        const presupuesto = clientes.find(cliente => cliente.id === parseInt(id)); //parseamos el id que viene en string
        const trabajosCliente = trabajos.find(trabajo => trabajo.id === parseInt(id));

        res.render('detail/detail', {presupuesto, trabajosCliente});
    }
}