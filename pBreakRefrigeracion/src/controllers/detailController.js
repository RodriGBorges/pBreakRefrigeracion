let presupuestos =require("../data/presupuestos.json");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    detail: (req, res) => {
        const {id} = req.params;
        const presupuesto = presupuestos.find(presupuesto => presupuesto.id === parseInt(id));

        res.render('detail/detail', { presupuesto, toThousand });
    }
}