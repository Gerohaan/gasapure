const infoComerciante = require('../../services/infoComerciante')

class infoComercianteValidator {
    existsEmail = email => {
        return infoComerciante.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return infoComerciante.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún comerciante registrado')
            })
    }
}
module.exports = new infoComercianteValidator()