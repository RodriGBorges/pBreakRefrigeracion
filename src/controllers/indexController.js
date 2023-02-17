const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    home: (req, res) => {
        db.Presupuesto.findAll({
            order:[
                ['id', 'DESC']
            ]
        })
        .then(presupuestos => {
            res.render('index', {presupuestos, toThousand})
        })
        .catch( error => {
            res.send(`Error al requerir presupuestos de la base de datos ERROR ${error}`)
        })
    },
    buscarPresupuesto: (req, res) => {
        let busqueda = req.query.buscar;
        if (busqueda === "") {
            res.render('buscador', { result: {}, toThousand, busqueda})
        }
        db.Presupuesto.findAll({
            where: {
                [Op.or]: 
                [{
                    nombreCliente: {[Op.substring]: busqueda}
                }, {
                    telefonoCliente: {[Op.substring]: busqueda}
                }, {
                    clave: {[Op.substring]: busqueda}
                }, {
                    fechaPresupuesto: {[Op.substring]: busqueda}
                }, {
                    descripcion: {[Op.substring]: busqueda}
                }, {
                    id: {[Op.substring]: busqueda}
                }]
            }
        })
        .then(result => {
            res.render('buscador', { result, toThousand, busqueda})
        })
        .catch(error => {
            res.send(`Error al requerir presupuestos de la base de datos ERROR ${error}`)
        })
    }
}