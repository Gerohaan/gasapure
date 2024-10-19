module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'idRol', {
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
    await queryInterface.removeColumn('Users', 'idRol');
  }
};
