'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('infoComerciante', 'img', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoComerciante', 'fechaNacimiento', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoComerciante', 'genero', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoComerciante', 'nacionalidad', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('infoComerciante', 'img');
    await queryInterface.removeColumn('infoComerciante', 'fechaNacimiento');
    await queryInterface.removeColumn('infoComerciante', 'genero');
    await queryInterface.removeColumn('infoComerciante', 'nacionalidad');
  }
};
