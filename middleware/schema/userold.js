const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  email : {
    notEmpty: true,
    errorMessage: 'Email No puede estar vacío.'
  },
  password: {
    notEmpty: true,
    errorMessage: 'Password No puede estar vacío.'
  },
  status: {
    notEmpty: true,
    errorMessage: 'Status No puede estar vacío.'
  },
  nombres: {
    notEmpty: true,
    errorMessage: 'Nomrbes No puede estar vacío.'
  },
  userName : {
    notEmpty: true,
    errorMessage: 'User Name No puede estar vacío.'
  },
  rol: {
    notEmpty: true,
    errorMessage: 'Rol No puede estar vacío.'
  },
  telefono: {
    notEmpty: true,
    errorMessage: 'Teléfono No puede estar vacío.'
  }

}
module.exports = checkuser