'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Asociar Role con Users y UsersClient
      Role.hasMany(models.User, { foreignKey: 'idRol' });
      Role.hasMany(models.UserClient, { foreignKey: 'idRol' });
    }
  }
  
  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Role',
  });

  return Role;
};
