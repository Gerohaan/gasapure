module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Solo renombrar el campo 'precio' a 'total' si la columna 'presentacion' ya no está
    await queryInterface.renameColumn('detalleVenta', 'precio', 'total');
  },

  down: async (queryInterface, Sequelize) => {
    // Renombrar el campo 'total' de vuelta a 'precio'
    await queryInterface.renameColumn('detalleVenta', 'total', 'precio');
  }
};
