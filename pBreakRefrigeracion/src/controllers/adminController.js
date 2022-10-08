const clientes = require('../data/clientes.json');
const trabajos = require('../data/trabajos.json');

module.exports = {
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
    vistaEditar: (req, res) => {
        const {id} = req.params;
        const presupuesto = clientes.find(cliente => cliente.id === parseInt(id));

        let trabajosCliente = [];
        for (let i = 0; i < trabajos.length; i++) {
            if(trabajos[i].id == id) {
                trabajosCliente.push(trabajos[i])
            }
        }

        res.render('admin/editar', {presupuesto, trabajosCliente})
    }
}