// models/userClient.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserClient extends Model {
    static associate(models) {
      // define association here
      UserClient.belongsTo(models.Role, { as: "rol", foreignKey: "idRol" });
    }
  }
  
  UserClient.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idRol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role', // Refers to table name
        key: 'id',
      },
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'UserClient',
    tableName: 'usersclients', // Usa el nombre correcto de la tabla
    timestamps: true,
  });

  return UserClient;
};
