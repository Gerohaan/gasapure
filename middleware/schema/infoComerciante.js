const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  razonSocial : {
    notEmpty: true,
    errorMessage: 'Razón social no puede estar vacío.'
  },
  rubro: {
    notEmpty: true,
    errorMessage: 'Rubro no puede estar vacío.'
  },
  direccion: {
    notEmpty: true,
    errorMessage: 'Dirección no puede estar vacío.'
  },
  rif : {
    notEmpty: true,
    errorMessage: 'Rif no puede estar vacío.'
  },
  telefono : {
    notEmpty: true,
    errorMessage: 'Teléfono no puede estar vacío.'
  },
  status : {
    notEmpty: true,
    errorMessage: 'Status no puede estar vacío.'
  },
  descripcion : {
    notEmpty: true,
    errorMessage: 'Descripción no puede estar vacío.'
  },
  idUserClient  : {
    notEmpty: true,
    errorMessage: 'Id de usuario no puede estar vacío.'
  }

}
module.exports = checkuser