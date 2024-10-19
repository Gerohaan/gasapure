const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  nombres : {
    notEmpty: true,
    errorMessage: 'Nombres no puede estar vacío.'
  },
  apellidos: {
    notEmpty: true,
    errorMessage: 'Apellidos no puede estar vacío.'
  },
  direccion: {
    notEmpty: true,
    errorMessage: 'Dirección no puede estar vacío.'
  },
  cedula : {
    notEmpty: true,
    errorMessage: 'Cédula no puede estar vacío.'
  },
  telefono : {
    notEmpty: true,
    errorMessage: 'Teléfono no puede estar vacío.'
  },
  status : {
    notEmpty: true,
    errorMessage: 'Status no puede estar vacío.'
  },
  idUserClient  : {
    notEmpty: true,
    errorMessage: 'Id de usuario no puede estar vacío.'
  }

}
module.exports = checkuser