'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presupuesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Presupuesto.init({
    clave: DataTypes.STRING,
    nombreCliente: DataTypes.STRING,
    direccionCliente: DataTypes.STRING,
    telefonoCliente: DataTypes.INTEGER,
    garantia: DataTypes.STRING,
    nPresupuesto: DataTypes.INTEGER,
    trabajo0: DataTypes.STRING(500),
    precio0: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    descripcion0: DataTypes.TEXT,
    fechaPresupuesto: DataTypes.STRING,
    precioTrabajoTotal: DataTypes.INTEGER,
    trabajo1: DataTypes.STRING(500),
    precio1: DataTypes.INTEGER,
    descripcion1: DataTypes.TEXT,
    trabajo2: DataTypes.STRING(500),
    precio2: DataTypes.INTEGER,
    descripcion2: DataTypes.TEXT,
    trabajo3: DataTypes.STRING(500),
    precio3: DataTypes.INTEGER,
    descripcion3: DataTypes.TEXT,
    trabajo4: DataTypes.STRING(500),
    precio4: DataTypes.INTEGER,
    descripcion4: DataTypes.TEXT,
    trabajo5: DataTypes.STRING(500),
    precio5: DataTypes.INTEGER,
    descripcion5: DataTypes.TEXT,
    trabajo6: DataTypes.STRING(500),
    precio6: DataTypes.INTEGER,
    descripcion6: DataTypes.TEXT,
    trabajo7: DataTypes.STRING(500),
    precio7: DataTypes.INTEGER,
    descripcion7: DataTypes.TEXT,
    trabajo8: DataTypes.STRING(500),
    precio8: DataTypes.INTEGER,
    descripcion8: DataTypes.TEXT,
    trabajo9: DataTypes.STRING(500),
    precio9: DataTypes.INTEGER,
    descripcion9: DataTypes.TEXT,
    trabajo10: DataTypes.STRING(500),
    precio10: DataTypes.INTEGER,
    descripcion10: DataTypes.TEXT,
    trabajo11: DataTypes.STRING(500),
    precio11: DataTypes.INTEGER,
    descripcion11: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Presupuesto',
  });
  return Presupuesto;
};