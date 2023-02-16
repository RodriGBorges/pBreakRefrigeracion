'use strict';

/** @type {import('sequelize-cli').Migration} */

const presupuestosJson = require("../../data/presupuestos.json");

let presupuestos = presupuestosJson.map(presupuestoJson => {
  let presupuesto = {

    clave: presupuestoJson.clave,
    nombreCliente: presupuestoJson.nombreCliente,
    direccionCliente: presupuestoJson.direccionCliente,
    telefonoCliente: presupuestoJson.telefonoCliente,
    garantia: presupuestoJson.garantia,
    nPresupuesto: presupuestoJson.nPresupuesto,
    descripcion: presupuestoJson.descripcion,
    fechaPresupuesto: presupuestoJson.fechaPresupuesto,
    precioTrabajoTotal: presupuestoJson.precioTrabajoTotal,
    trabajo0: presupuestoJson.trabajo0,
    precio0: presupuestoJson.precio0,
    descripcion0: presupuestoJson.descripcion0,
    trabajo1: presupuestoJson.trabajo1,
    precio1: presupuestoJson.precio1,
    descripcion1: presupuestoJson.descripcion1,
    trabajo2: presupuestoJson.trabajo2,
    precio2: presupuestoJson.precio2,
    descripcion2: presupuestoJson.descripcion2,
    trabajo3: presupuestoJson.trabajo3,
    precio3: presupuestoJson.precio3,
    descripcion3: presupuestoJson.descripcion3,
    trabajo4: presupuestoJson.trabajo4,
    precio4: presupuestoJson.precio4,
    descripcion4: presupuestoJson.descripcion4,
    trabajo5: presupuestoJson.trabajo5,
    precio5: presupuestoJson.precio5,
    descripcion5: presupuestoJson.descripcion5,
    trabajo6: presupuestoJson.trabajo6,
    precio6: presupuestoJson.precio6,
    descripcion6: presupuestoJson.descripcion6,
    trabajo7: presupuestoJson.trabajo7,
    precio7: presupuestoJson.precio7,
    descripcion7: presupuestoJson.descripcion7,
    trabajo8: presupuestoJson.trabajo8,
    precio8: presupuestoJson.precio8,
    descripcion8: presupuestoJson.descripcion8,
    trabajo9: presupuestoJson.trabajo9,
    precio9: presupuestoJson.precio9,
    descripcion9: presupuestoJson.descripcion9,
    trabajo10: presupuestoJson.trabajo10,
    precio10: presupuestoJson.precio10,
    descripcion10: presupuestoJson.descripcion10,
    trabajo11: presupuestoJson.trabajo11,
    precio11: presupuestoJson.precio11,
    descripcion11: presupuestoJson.descripcion11,
    createdAt: new Date,
    updatedAt: new Date,
  }

  return presupuesto
})

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Presupuestos', presupuestos, {});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Presupuestos', null, {});
    
  }
};
