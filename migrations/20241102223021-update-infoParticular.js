'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('infoParticular', 'img', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoParticular', 'fechaNacimiento', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoParticular', 'genero', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('infoParticular', 'nacionalidad', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('infoParticular', 'img');
    await queryInterface.removeColumn('infoParticular', 'fechaNacimiento');
    await queryInterface.removeColumn('infoParticular', 'genero');
    await queryInterface.removeColumn('infoParticular', 'nacionalidad');
  }
};
