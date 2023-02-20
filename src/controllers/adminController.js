const db = require('../database/models');
const { validationResult } = require('express-validator');

const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.tz.setDefault("America/Argentina/Buenos_Aires");

module.exports = {
    vistaCrear: (req, res) => {
        res.render('admin/crear');
        console.log(dayjs.tz().format('DD/MM/YYYY'));
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
        const createErrors = validationResult(req);

        if (createErrors.isEmpty()) {
            
            const { nPresupuesto, precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11, telefonoCliente } = req.body;
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
                nPresupuesto: nPresupuesto === "" ? 1 : nPresupuesto,
                telefonoCliente: telefonoCliente === "" ? 0 : telefonoCliente,
                fechaPresupuesto: dayjs.tz().format('DD/MM/YYYY') == "Invalid Date" ? new Date : dayjs.tz().format('DD/MM/YYYY'),
                precioTrabajoTotal: totalPrecio,
                precio0: precio0 === "" ? 0 : precio0,
                precio0: precio1 === "" ? 0 : precio1,
                precio0: precio2 === "" ? 0 : precio2,
                precio0: precio3 === "" ? 0 : precio3,
                precio0: precio4 === "" ? 0 : precio4,
                precio0: precio5 === "" ? 0 : precio5,
                precio0: precio6 === "" ? 0 : precio6,
                precio0: precio7 === "" ? 0 : precio7,
                precio0: precio8 === "" ? 0 : precio8,
                precio0: precio9 === "" ? 0 : precio9,
                precio0: precio10 === "" ? 0 : precio10,
                precio0: precio11 === "" ? 0 : precio11,

            })
            .then(presupuesto => {
                res.redirect(`/presupuesto/${presupuesto.id}`);
            })
            .catch(error => {
                res.send(`No se pudo crear el presupuesto ERROR => \n${error}`);
            })
        } else {
            res.render('admin/crear');
        }

    },
    editarPresupuesto: (req, res) => {

        const editErrors = validationResult(req);

        if (editErrors.isEmpty()) {

            const { clave, nombreCliente, direccionCliente, telefonoCliente, garantia, nPresupuesto, trabajo0, precio0, trabajo1, precio1, trabajo2, precio2, trabajo3, precio3, trabajo4, precio4, trabajo5, precio5, trabajo6, precio6, trabajo7, precio7, trabajo8, precio8, trabajo9, precio9, trabajo10, precio10, trabajo11, precio11, descripcion, descripcion0, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10, descripcion11, actualizarFecha, fechaPresupuesto } = req.body;
    
            let totalPrecio = 0;
            let precios = [precio0, precio1, precio2, precio3, precio4, precio5, precio6, precio7, precio8, precio9, precio10, precio11];
            precios.forEach(precio => {
                if (precio != '') {
                    totalPrecio += parseInt(precio)
                }
            });
    
            db.Presupuesto.update({
                clave: clave,
                nombreCliente: nombreCliente,
                direccionCliente: direccionCliente,
                telefonoCliente: telefonoCliente === "" ? 0 : telefonoCliente,
                garantia: garantia,
                nPresupuesto: nPresupuesto == "" ? 1 : nPresupuesto,
                fechaPresupuesto: actualizarFecha == "on" ? dayjs.tz().format('DD/MM/YYYY') : fechaPresupuesto,
                descripcion: descripcion,
                precioTrabajoTotal: totalPrecio,
                trabajo0: trabajo0,
                precio0: precio0 === "" ? 0 : precio0,
                descripcion0: descripcion0,
                trabajo1: trabajo1,
                precio1: precio1 === "" ? 0 : precio1,
                descripcion1: descripcion1,
                trabajo2: trabajo2,
                precio2: precio2 === "" ? 0 : precio2,
                descripcion2: descripcion2,
                trabajo3: trabajo3,
                precio3: precio3 === "" ? 0 : precio3,
                descripcion3: descripcion3,
                trabajo4: trabajo4,
                precio4: precio4 === "" ? 0 : precio4,
                descripcion4: descripcion4,
                trabajo5: trabajo5,
                precio5: precio5 === "" ? 0 : precio5,
                descripcion5: descripcion5,
                trabajo6: trabajo6,
                precio6: precio6 === "" ? 0 : precio6,
                descripcion6: descripcion6,
                trabajo7: trabajo7,
                precio7: precio7 === "" ? 0 : precio7,
                descripcion7: descripcion7,
                trabajo8: trabajo8,
                precio8: precio8 === "" ? 0 : precio8,
                descripcion8: descripcion8,
                trabajo9: trabajo9,
                precio9: precio9 === "" ? 0 : precio9,
                descripcion9: descripcion9,
                trabajo10: trabajo10,
                precio10: precio10 === "" ? 0 : precio10,
                descripcion10: descripcion10,
                trabajo11: trabajo11,
                precio11: precio11 === "" ? 0 : precio11,
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
        } else {
            db.Presupuesto.findByPk(+req.params.id)
            .then((presupuesto) => {
                res.render('admin/editar', { presupuesto });
            })
            .catch(error => {
                console.log(error)
                res.send(`No se pudo obtener el presupuesto de la base de datos \n${error}`);
            })
        }


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