// models/DetalleVenta.js
module.exports = (sequelize, DataTypes) => {
  const DetalleVenta = sequelize.define('DetalleVenta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idVenta: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ventas',
        key: 'id'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    cantidad: DataTypes.INTEGER,
    fecha: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    precio: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'detalleVenta'
  });

  DetalleVenta.associate = (models) => {
    DetalleVenta.belongsTo(models.Venta, {
      foreignKey: 'idVenta',
      as: 'venta'
    });

    DetalleVenta.belongsTo(models.Producto, {
      foreignKey: 'idProducto',
      as: 'producto'
    });
  };

  return DetalleVenta;
};
