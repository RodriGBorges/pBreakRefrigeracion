const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

module.exports = {
    detail: (req, res) => {

        db.Presupuesto.findByPk(+req.params.id)
        .then(presupuesto => {
            res.render('detail/detail', { presupuesto, toThousand })
        })
        .catch(error => {
            console.log(error)
            res.send("No se pudo obtener el presupuesto de la base de datos")
        })
    }
}