const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  idUserClient  : {
    notEmpty: true,
    errorMessage: 'Cliente no puede estar vacío.'
  },
  monto: {
    notEmpty: true,
    errorMessage: 'Monto no puede estar vacío.'
  },
  montoPagado: {
    notEmpty: true,
    errorMessage: 'Monto pagado no puede estar vacío.'
  },
  /* fecha : {
    notEmpty: true,
    errorMessage: 'Fecha no puede estar vacío.'
  },
  hora : {
    notEmpty: true,
    errorMessage: 'Hora no puede estar vacío.'
  }, */
 /*  status : {
    notEmpty: true,
    errorMessage: 'Status no puede estar vacío.'
  }, */
 /*  observacion  : {
    notEmpty: true,
    errorMessage: 'Id de usuario no puede estar vacío.'
  }, */
  pago  : {
    notEmpty: true,
    errorMessage: 'Pago Status no puede estar vacío.'
  },
  comprobante  : {
    notEmpty: true,
    errorMessage: 'comprobante no puede estar vacío.'
  },
  referencia   : {
    notEmpty: true,
    errorMessage: 'Referencia no puede estar vacío.'
  }

}
module.exports = checkuser