// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: DataTypes.STRING,
    nombres: DataTypes.STRING,
    userName: DataTypes.STRING,
    rol: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    tableName: 'users'
  });

  return User;
};
