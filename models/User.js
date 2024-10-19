// models/user.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { as: "rol", foreignKey: "idRol" });
    }
  }
  
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombres: {
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
    modelName: 'User',
  });

  return User;
};
