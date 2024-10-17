'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ventas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idUserClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      monto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      montoPagado: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.00
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
      status: {
        type: Sequelize.ENUM('en_proceso', 'pagada', 'cancelada', 'pendiente_pago', 'reembolsada'),
        defaultValue: 'en_proceso'
      },
      observacion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pago: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      comprobante: {
        type: Sequelize.STRING,
        allowNull: false
      },
      referencia: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ventas');
  }
};
