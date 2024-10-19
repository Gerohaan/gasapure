const producto = require('../../services/productos')

class productoValidator {
    existsName = nombre => {
        return producto.getOne({
                nombre
            })
            .then(product => {
                return product === null ? true : Promise.reject('El nombre '+nombre+' existe en la base de datos')
            })
    }

    exists = id => {
        return producto.getOne({
                id
            })
            .then(product => {
                return product !== null ? true : Promise.reject('El id no corresponde a ningún producto registrado')
            })
    }
}
module.exports = new productoValidator()