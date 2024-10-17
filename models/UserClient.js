// models/UserClient.js
module.exports = (sequelize, DataTypes) => {
  const UserClient = sequelize.define('UserClient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    tipo: DataTypes.STRING,
    userName: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    tableName: 'usersClient'
  });

  return UserClient;
};
