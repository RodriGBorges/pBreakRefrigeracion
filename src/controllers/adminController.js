const fs = require('fs');
const path = require('path');

const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.tz.setDefault("America/Argentina/Buenos_Aires");

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
        const { clave, nPresupuesto, precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11, descripcion } = req.body;
        let nuevoPresupuesto = req.body;

        let totalPrecio = 0;
        let precios = [precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11];
        precios.forEach(precio => {
            if (precio != "") {
                totalPrecio += parseInt(precio)
            }
        })

        nuevoPresupuesto.id = presupuestos.length + 1;
        nuevoPresupuesto.nPresupuesto = nPresupuesto == "" ? 1 : nPresupuesto;
        nuevoPresupuesto.clave = clave == "" ? 0 : clave;
        nuevoPresupuesto.fechaPresupuesto = dayjs.tz().format('DD/MM/YYYY');
        nuevoPresupuesto.descripcion = descripcion == "" ? 0 : descripcion;
        nuevoPresupuesto.precioTrabajoTotal = totalPrecio;
        
        presupuestos.push(nuevoPresupuesto);
        fs.writeFileSync(presupuestosDestino, JSON.stringify(presupuestos, null, 2));

        res.redirect(`/presupuesto/${nuevoPresupuesto.id}`);
    },
    editarPresupuesto: (req, res) => {

        let presupuestoEditado = presupuestos.find(presupuesto => presupuesto.id === parseInt(req.params.id));
        const { clave, nombreCliente, direccionCliente, telefonoCliente, garantia, nPresupuesto, trabajo0, precio0, trabajo1, precio1, trabajo2, precio2, trabajo3, precio3, trabajo4, precio4, trabajo5, precio5, trabajo6, precio6, trabajo7, precio7, trabajo8, precio8, trabajo9, precio9, trabajo10, precio10, trabajo11, precio11, descripcion, descripcion0, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10, descripcion11, actualizarFecha } = req.body;

        let totalPrecio = 0;
        let precios = [precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11];
        precios.forEach(precio => {
            if (precio != '') {
                totalPrecio += parseInt(precio)
            }
        })

        actualizarFecha == "on" ? presupuestoEditado.fechaPresupuesto = dayjs.tz().format('DD/MM/YYYY') : null;

        presupuestoEditado.palabraClave = clave == "" ? 0 : clave;
        presupuestoEditado.nombreCliente = nombreCliente;
        presupuestoEditado.direccionCliente = direccionCliente;
        presupuestoEditado.telefonoCliente = telefonoCliente;
        presupuestoEditado.garantia = garantia;
        presupuestoEditado.nPresupuesto = nPresupuesto == "" ? 1 : nPresupuesto;
        presupuestoEditado.descripcion = descripcion == "" ? 0 : descripcion;
        presupuestoEditado.precioTrabajoTotal = totalPrecio;
        presupuestoEditado.trabajo0 = trabajo0;
        presupuestoEditado.precio0 = precio0;
        presupuestoEditado.descripcion0 = descripcion0;
        presupuestoEditado.trabajo1 = trabajo1;
        presupuestoEditado.precio1 = precio1;
        presupuestoEditado.descripcion1 = descripcion1;
        presupuestoEditado.trabajo2 = trabajo2;
        presupuestoEditado.precio2 = precio2;
        presupuestoEditado.descripcion2 = descripcion2;
        presupuestoEditado.trabajo3 = trabajo3;
        presupuestoEditado.precio3 = precio3;
        presupuestoEditado.descripcion3 = descripcion3;
        presupuestoEditado.trabajo4 = trabajo4;
        presupuestoEditado.precio4 = precio4;
        presupuestoEditado.descripcion4 = descripcion4;
        presupuestoEditado.trabajo5 = trabajo5;
        presupuestoEditado.precio5 = precio5;
        presupuestoEditado.descripcion5 = descripcion5;
        presupuestoEditado.trabajo6 = trabajo6;
        presupuestoEditado.precio6 = precio6;
        presupuestoEditado.descripcion6 = descripcion6;
        presupuestoEditado.trabajo7 = trabajo7;
        presupuestoEditado.precio7 = precio7;
        presupuestoEditado.descripcion7 = descripcion7;
        presupuestoEditado.trabajo8 = trabajo8;
        presupuestoEditado.precio8 = precio8;
        presupuestoEditado.descripcion8 = descripcion8;
        presupuestoEditado.trabajo9 = trabajo9;
        presupuestoEditado.precio9 = precio9;
        presupuestoEditado.descripcion9 = descripcion9;
        presupuestoEditado.trabajo10 = trabajo10;
        presupuestoEditado.precio10 = precio10;
        presupuestoEditado.descripcion10 = descripcion10;
        presupuestoEditado.trabajo11 = trabajo11;
        presupuestoEditado.precio11 = precio11;
        presupuestoEditado.descripcion11 = descripcion11;

        fs.writeFileSync(presupuestosDestino, JSON.stringify(presupuestos, null, 2));

        res.redirect(`/presupuesto/${req.params.id}`);

    },
    eliminarPresupuesto: (req, res) => {
        presupuestos = presupuestos.filter(e => e.id !== parseInt(req.params.id));

        fs.writeFileSync(presupuestosDestino, JSON.stringify(presupuestos, null, 2));

		res.redirect("/");
    }
}