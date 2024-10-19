const userClientService = require('../../services/userClient')
const { correo, email } = require('../schema/user')

class userValidator {
    existsEmail = email => {
        return userClientService.getOne({
                email
            })
            .then(user => {
                return user === null ? true : Promise.reject('El correo '+email+' existe en la base de datos')
            })
    }

    existsEmailLogin = email => {
        return userClientService.getOne({
                email
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El correo '+email+' no existe en la base de datos')
            })
    }

    existsPassword = password => {
        return userClientService.getOne({
                password
            })
            .then(user => {
                return user === null ? true : Promise.reject('La contraseña no es correcta')
            })
    }

    exists = id => {
        return userClientService.getOne({
                id
            })
            .then(user => {
                return user !== null ? true : Promise.reject('El id no corresponde a ningún usuario registrado')
            })
    }
}
module.exports = new userValidator()