const infoParticular = require('../../services/infoParticular')

class infoParticularValidator {
    existsEmail = email => {
        return infoParticular.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    exists = id => {
        return infoParticular.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún particular registrado')
            })
    }
}
module.exports = new infoParticularValidator()