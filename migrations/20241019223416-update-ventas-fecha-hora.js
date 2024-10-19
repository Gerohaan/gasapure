module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ventas', 'fecha', {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW
    });
    await queryInterface.changeColumn('ventas', 'hora', {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIME')
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Aquí puedes revertir los cambios si es necesario
    await queryInterface.changeColumn('ventas', 'fecha', {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: null
    });
    await queryInterface.changeColumn('ventas', 'hora', {
      type: Sequelize.TIME,
      allowNull: true,
      defaultValue: null
    });
  }
};
