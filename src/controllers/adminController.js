const db = require('../database/models');

const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.tz.setDefault("America/Argentina/Buenos_Aires");

module.exports = {
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
    vistaEditar: (req, res) => {

        db.Presupuesto.findByPk(+req.params.id)
        .then((presupuesto) => {
            res.render('admin/editar', { presupuesto });
        })
        .catch(error => {
            console.log(error)
            res.send(`No se pudo obtener el presupuesto de la base de datos \n${error}`);
        })
        
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
        });

        db.Presupuesto.create({
            ...nuevoPresupuesto,
            nPresupuesto: nPresupuesto == "" ? 1 : nPresupuesto,
            clave: clave == "" ? 0 : clave,
            fechaPresupuesto: dayjs.tz().format('DD/MM/YYYY'),
            descripcion: descripcion == "" ? 0 : descripcion,
            precioTrabajoTotal: totalPrecio
        })
        .then(presupuesto => {
            res.redirect(`/presupuesto/${presupuesto.id}`);
        })
        .catch(error => {
            res.send(`No se pudo crear el presupuesto ERROR => \n${error}`);
        })

    },
    editarPresupuesto: (req, res) => {

        const { clave, nombreCliente, direccionCliente, telefonoCliente, garantia, nPresupuesto, trabajo0, precio0, trabajo1, precio1, trabajo2, precio2, trabajo3, precio3, trabajo4, precio4, trabajo5, precio5, trabajo6, precio6, trabajo7, precio7, trabajo8, precio8, trabajo9, precio9, trabajo10, precio10, trabajo11, precio11, descripcion, descripcion0, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10, descripcion11, actualizarFecha, fechaPresupuesto } = req.body;

        let totalPrecio = 0;
        let precios = [precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11];
        precios.forEach(precio => {
            if (precio != '') {
                totalPrecio += parseInt(precio)
            }
        });

        db.Presupuesto.update({
            clave: clave == "" ? 0 : clave,
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            telefonoCliente: telefonoCliente,
            garantia: garantia,
            nPresupuesto: nPresupuesto == "" ? 1 : nPresupuesto,
            fechaPresupuesto: actualizarFecha == "on" ? dayjs.tz().format('DD/MM/YYYY') : fechaPresupuesto,
            descripcion: descripcion == "" ? 0 : descripcion,
            precioTrabajoTotal: totalPrecio,
            trabajo0: trabajo0,
            precio0: precio0,
            descripcion0: descripcion0,
            trabajo1: trabajo1,
            precio1: precio1,
            descripcion1: descripcion1,
            trabajo2: trabajo2,
            precio2: precio2,
            descripcion2: descripcion2,
            trabajo3: trabajo3,
            precio3: precio3,
            descripcion3: descripcion3,
            trabajo4: trabajo4,
            precio4: precio4,
            descripcion4: descripcion4,
            trabajo5: trabajo5,
            precio5: precio5,
            descripcion5: descripcion5,
            trabajo6: trabajo6,
            precio6: precio6,
            descripcion6: descripcion6,
            trabajo7: trabajo7,
            precio7: precio7,
            descripcion7: descripcion7,
            trabajo8: trabajo8,
            precio8: precio8,
            descripcion8: descripcion8,
            trabajo9: trabajo9,
            precio9: precio9,
            descripcion9: descripcion9,
            trabajo10: trabajo10,
            precio10: precio10,
            descripcion10: descripcion10,
            trabajo11: trabajo11,
            precio11: precio11,
            descripcion11: descripcion11

        }, {
            where: {id: req.params.id}
        })
        .then(() => {
            res.redirect(`/presupuesto/${req.params.id}`);
        })
        .catch(error => {
            res.send(`No se pudo editar el presupuesto \n${error}`);
        })

    },
    eliminarPresupuesto: (req, res) => {

        db.Presupuesto.destroy({
            where: {id: req.params.id}
        })
        .then( () => {
            res.redirect("/");
        })
        .catch(error => {
            res.send(`No se pudo eliminar el presupuesto \n${error}`);
        })
    }
}