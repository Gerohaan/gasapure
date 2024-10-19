module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productos', 'precio', {
      type: Sequelize.DECIMAL(10, 2), // o ajusta el tipo de dato según lo necesites
      allowNull: false,
      defaultValue: 0.00
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('productos', 'precio');
  }
};
