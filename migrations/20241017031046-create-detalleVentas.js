'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalleVenta', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idVenta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idProducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Índices
    await queryInterface.addIndex('detalleVenta', ['idVenta']);
    await queryInterface.addIndex('detalleVenta', ['idProducto']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalleVenta');
  }
};
