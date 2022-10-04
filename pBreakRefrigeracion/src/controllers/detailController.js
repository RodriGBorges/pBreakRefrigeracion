const clientes = require('../data/clientes.json');
const trabajos = require('../data/trabajos.json');

module.exports = {
    detail: (req, res) => {
        const {id} = req.params;
        const presupuesto = clientes.find(cliente => cliente.id === parseInt(id)); //parseamos el id que viene en string

        // Se filtran todos los trabajos y se guardan solo los trabajos del cliente con el mismo id
        let trabajosCliente = [];
        for (let i = 0; i < trabajos.length; i++) {
            if(trabajos[i].id == id) {
                trabajosCliente.push(trabajos[i])
            }
        }

        res.render('detail/detail', {presupuesto, trabajosCliente});
    }
}