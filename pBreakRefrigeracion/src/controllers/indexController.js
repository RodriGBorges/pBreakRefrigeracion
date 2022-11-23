const fs = require('fs');
const path = require('path');

const presupuestosDestino = path.join(__dirname, '../data/presupuestos.json');
let presupuestos = JSON.parse(fs.readFileSync(presupuestosDestino, "utf-8"));

module.exports = {
    home: (req, res) => {
        res.render('index', { presupuestos });
    }
}