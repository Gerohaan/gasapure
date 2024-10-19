// models/InfoComerciante.js
module.exports = (sequelize, DataTypes) => {
  const InfoComerciante = sequelize.define('InfoComerciante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    razonSocial: DataTypes.STRING,
    rubro: DataTypes.STRING,
    direccion: DataTypes.STRING,
    rif: DataTypes.STRING,
    telefono: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    descripcion: DataTypes.STRING,
    idUserClient: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usersClient',
        key: 'id'
      }
    }
  }, {
    tableName: 'infoComerciante'
  });

  InfoComerciante.associate = (models) => {
    InfoComerciante.belongsTo(models.UserClient, {
      foreignKey: 'idUserClient',
      as: 'userClient'
    });
  };

  return InfoComerciante;
};
