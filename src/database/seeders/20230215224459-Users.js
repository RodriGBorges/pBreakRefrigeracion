'use strict';

/** @type {import('sequelize-cli').Migration} */

const usuariosJson = require("../../data/usuarios.json");

let usuarios = usuariosJson.map(usuarioJson => {
  let usuario = {

    nombreUsuario: usuarioJson.user,
    contraseña: usuarioJson.password,
    createdAt: new Date,
    updatedAt: new Date,
  }

  return usuario
})

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
