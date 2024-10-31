const ventas = require('../../services/ventas')
const detallesVenta = require('../../services/detalleVentas')
class ventasValidator {
    existsRef = referencia => {
        return ventas.getOne({
                referencia
            })
            .then(user => {
                return user === null ? true : Promise.reject('La referencia '+referencia+' existe en la base de datos')
            })
    }

    exists = id => {
        return ventas.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningúna venta registrada')
            })
    }

    existsDetail = id => {
        return detallesVenta.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningúna venta registrada')
            })
    }
}
module.exports = new ventasValidator()