// models/Producto.js
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    presentacion: DataTypes.STRING,
    unidadDeMedida: DataTypes.STRING,
    precio: DataTypes.DECIMAL(10, 2),
    status: DataTypes.ENUM('disponible', 'no_disponible')
  }, {
    tableName: 'productos'
  });

  Producto.associate = (models) => {
    Producto.hasMany(models.DetalleVenta, {
      foreignKey: 'idProducto',
      as: 'detalles'
    });
  };

  return Producto;
};
