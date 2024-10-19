const detalleVentas = require('../../services/detalleVentas')

class detalleVentasValidator {
    existsEmail = email => {
        return detalleVentas.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return detalleVentas.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún detalle de venta registrado')
            })
    }
}
module.exports = new detalleVentasValidator()