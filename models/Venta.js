// models/Venta.js
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUserClient: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usersClient',
        key: 'id'
      }
    },
    monto: DataTypes.DECIMAL(10, 2),
    montoPagado: DataTypes.DECIMAL(10, 2),
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Fecha actual por defecto
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: DataTypes.STRING,
    observacion: DataTypes.STRING,
    pago: DataTypes.BOOLEAN,
    comprobante: DataTypes.STRING,
    referencia: DataTypes.STRING
  }, {
    tableName: 'ventas'
  });

  Venta.associate = (models) => {
    Venta.belongsTo(models.UserClient, {
      foreignKey: 'idUserClient',
      as: 'userClient'
    });

    Venta.hasMany(models.DetalleVenta, {
      foreignKey: 'idVenta',
      as: 'detalles'
    });
  };

  return Venta;
};
