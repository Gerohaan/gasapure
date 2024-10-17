'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING, // Almacena la ruta o URL de la imagen
        allowNull: true
      },
      presentacion: {
        type: Sequelize.STRING, // Descripción de la presentación (ej. "500g", "1L", etc.)
        allowNull: true
      },
      unidadDeMedida: {
        type: Sequelize.STRING, // Ejemplo: "kg", "litros", "unidades"
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('disponible', 'no_disponible'),
        defaultValue: 'disponible',
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
    await queryInterface.addIndex('productos', ['nombre']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productos');
  }
};
