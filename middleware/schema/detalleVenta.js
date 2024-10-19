const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  ideVenta  : {
    notEmpty: true,
    errorMessage: 'Id de venta no puede estar vacío.'
  },
  idProducto : {
    notEmpty: true,
    errorMessage: 'idProducto no puede estar vacío.'
  },
  cantidad: {
    notEmpty: true,
    errorMessage: 'Cantidad no puede estar vacío.'
  },
  fecha : {
    notEmpty: true,
    errorMessage: 'Fecha no puede estar vacío.'
  },
  hora : {
    notEmpty: true,
    errorMessage: 'Hora no puede estar vacío.'
  },
  status : {
    notEmpty: true,
    errorMessage: 'Status no puede estar vacío.'
  },
  precio : {
    notEmpty: true,
    errorMessage: 'Precio no puede estar vacío.'
  },

}
module.exports = checkuser