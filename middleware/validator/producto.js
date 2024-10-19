const producto = require('../../services/productos')

class productoValidator {
    existsEmail = email => {
        return producto.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return producto.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún producto registrado')
            })
    }
}
module.exports = new productoValidator()