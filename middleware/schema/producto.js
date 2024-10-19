const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  nombre   : {
    notEmpty: true,
    errorMessage: 'Nombre no puede estar vacío.'
  },
  /* imagen : {
    notEmpty: true,
    errorMessage: 'idProducto no puede estar vacío.'
  }, */
  presentacion: {
    notEmpty: true,
    errorMessage: 'Presentación no puede estar vacío.'
  },
  unidadDeMedida : {
    notEmpty: true,
    errorMessage: 'Unidad de medida no puede estar vacío.'
  },
  status : {
    notEmpty: true,
    errorMessage: 'Status no puede estar vacío.'
  }

}
module.exports = checkuser