const ventas = require('../../services/ventas')

class ventasValidator {
    existsEmail = email => {
        return ventas.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return ventas.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún usuario registrado')
            })
    }
}
module.exports = new ventasValidator()