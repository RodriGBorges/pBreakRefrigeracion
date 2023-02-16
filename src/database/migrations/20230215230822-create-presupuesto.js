'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Presupuestos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clave: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nombreCliente: {
        type: Sequelize.STRING,
        allowNull: true
      },
      direccionCliente: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telefonoCliente: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      garantia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nPresupuesto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trabajo0: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio0: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      descripcion0: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fechaPresupuesto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      precioTrabajoTotal: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      trabajo1: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio1: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo2: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio2: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo3: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio3: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo4: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio4: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion4: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo5: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio5: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion5: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo6: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio6: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion6: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo7: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio7: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion7: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo8: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio8: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion8: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo9: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio9: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion9: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo10: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio10: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion10: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      trabajo11: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      precio11: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      descripcion11: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Presupuestos');
  }
};