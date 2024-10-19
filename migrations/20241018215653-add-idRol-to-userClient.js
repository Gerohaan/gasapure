module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('UsersClients', 'idRol', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('UsersClients', 'idRol');
  }
};
