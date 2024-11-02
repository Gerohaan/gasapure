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
  tipo: {
    notEmpty: true,
    errorMessage: 'Tipo No puede estar vacío.'
  },
  userName : {
    notEmpty: true,
    errorMessage: 'Nombre de usuario No puede estar vacío.'
  }

}
module.exports = checkuser