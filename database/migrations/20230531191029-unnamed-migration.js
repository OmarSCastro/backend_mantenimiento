'use strict';

const { ECONOMICOS_TABLE, EconomicosSchema } = require('../models/economicos.model');
const { GENERAL_TABLE, GeneralSchema } = require('../models/general.model');
const { TRABAJADORES_TABLE, TrabajadoresSchema } = require('../models/trabajadores.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( ECONOMICOS_TABLE, EconomicosSchema );
    await queryInterface.createTable( TRABAJADORES_TABLE, TrabajadoresSchema );
    await queryInterface.createTable( GENERAL_TABLE, GeneralSchema );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable( GENERAL_TABLE);
    await queryInterface.dropTable( ECONOMICOS_TABLE);
    await queryInterface.dropTable( TRABAJADORES_TABLE);
  }
};
