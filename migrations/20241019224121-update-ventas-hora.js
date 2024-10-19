module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ventas', 'hora', {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIME'), // Registrar solo la hora actual
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ventas', 'hora', {
      type: Sequelize.TIME,
      allowNull: true,
      defaultValue: null,
    });
  }
};
