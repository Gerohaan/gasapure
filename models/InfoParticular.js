// models/InfoParticular.js
module.exports = (sequelize, DataTypes) => {
  const InfoParticular = sequelize.define('InfoParticular', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    img: {
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
