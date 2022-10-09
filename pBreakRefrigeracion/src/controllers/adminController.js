const clientes = require('../data/clientes.json');
const trabajos = require('../data/trabajos.json');

module.exports = {
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
    vistaEditar: (req, res) => {
        const {id} = req.params;
        const presupuesto = clientes.find(cliente => cliente.id === parseInt(id));
        const trabajosCliente = trabajos.find(trabajo => trabajo.id === parseInt(id));

        res.render('admin/editar', {presupuesto, trabajosCliente})
    }
}