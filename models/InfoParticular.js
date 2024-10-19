// models/InfoParticular.js
module.exports = (sequelize, DataTypes) => {
  const InfoParticular = sequelize.define('InfoParticular', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    cedula: DataTypes.STRING,
    telefono: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    idUserClient: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usersClient',
        key: 'id'
      }
    }
  }, {
    tableName: 'InfoParticular'
  });

  InfoParticular.associate = (models) => {
    InfoParticular.belongsTo(models.UserClient, {
      foreignKey: 'idUserClient',
      as: 'userClient'
    });
  };

  return InfoParticular;
};
