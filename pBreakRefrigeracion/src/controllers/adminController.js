const fs = require('fs');
const moment = require('moment/moment');
const path = require('path');

let presupuestos = require('../data/presupuestos.json');
const presupuestosDestino = path.join(__dirname, '../data/presupuestos.json');

module.exports = {
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
    vistaEditar: (req, res) => {
        const {id} = req.params;
        const presupuesto = presupuestos.find(presupuesto => presupuesto.id === parseInt(id));

        res.render('admin/editar', { presupuesto })
    },
    crearPresupuesto: (req, res) => {
        const { clave, nombre, direccion, telefono, garantia, trabajo0, precio0, trabajo1, precio1, trabajo2, precio2, trabajo3, precio3, trabajo4, precio4, trabajo5, precio5, trabajo6, precio6, trabajo7, precio7, trabajo8, precio8, trabajo9, precio9, trabajo10, precio10, trabajo11, precio11, descripcion } = req.body;
        let nuevoPresupuesto = req.body;

        let totalPrecio = 0;
        let precios = [precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11];
        precios.forEach(precio => {
            if (precio != '') {
                totalPrecio += parseInt(precio)
            }
        })


        nuevoPresupuesto.id = presupuestos.length + 1;
        nuevoPresupuesto.palabraClave = clave == "" ? 0 : clave;
        nuevoPresupuesto.fechaPresupuesto = moment().format('DD/MM/YYYY, H:mm a');
        nuevoPresupuesto.nombreCliente = nombre;
        nuevoPresupuesto.direccionCliente = direccion;
        nuevoPresupuesto.telefonoCliente = telefono;
        nuevoPresupuesto.garantia = garantia;
        nuevoPresupuesto.descripcion = descripcion == "" ? 0 : descripcion;
        nuevoPresupuesto.precioTrabajoTotal = totalPrecio;
        nuevoPresupuesto.trabajo0 = trabajo0;
        nuevoPresupuesto.precio0 = precio0;
        nuevoPresupuesto.trabajo1 = trabajo1;
        nuevoPresupuesto.precio1 = precio1;
        nuevoPresupuesto.trabajo2 = trabajo2;
        nuevoPresupuesto.precio2 = precio2;
        nuevoPresupuesto.trabajo3 = trabajo3;
        nuevoPresupuesto.precio3 = precio3;
        nuevoPresupuesto.trabajo4 = trabajo4;
        nuevoPresupuesto.precio4 = precio4;
        nuevoPresupuesto.trabajo5 = trabajo5;
        nuevoPresupuesto.precio5 = precio5;
        nuevoPresupuesto.trabajo6 = trabajo6;
        nuevoPresupuesto.precio6 = precio6;
        nuevoPresupuesto.trabajo7 = trabajo7;
        nuevoPresupuesto.precio7 = precio7;
        nuevoPresupuesto.trabajo8 = trabajo8;
        nuevoPresupuesto.precio8 = precio8;
        nuevoPresupuesto.trabajo9 = trabajo9;
        nuevoPresupuesto.precio9 = precio9;
        nuevoPresupuesto.trabajo10 = trabajo10;
        nuevoPresupuesto.precio10 = precio10;
        nuevoPresupuesto.trabajo11 = trabajo11;
        nuevoPresupuesto.precio11 = precio11;
        
        presupuestos.push(nuevoPresupuesto);
        fs.writeFileSync(presupuestosDestino, JSON.stringify(presupuestos, null, 2));

        res.redirect(`/presupuesto/${nuevoPresupuesto.id}`);
    }
}