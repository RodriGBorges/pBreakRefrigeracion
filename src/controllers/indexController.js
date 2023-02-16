const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

module.exports = {
    home: (req, res) => {
        db.Presupuesto.findAll()
        .then(presupuestos => {
            res.render('index', {presupuestos, toThousand})
        })
        .catch( error => {
            res.send("Error al requerir presupuestos de la base de datos")
            console.log(error);
        })
    }
}