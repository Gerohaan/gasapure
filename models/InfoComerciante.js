const { unique } = require("underscore");

// models/InfoComerciante.js
module.exports = (sequelize, DataTypes) => {
  const InfoComerciante = sequelize.define('InfoComerciante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rubro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
