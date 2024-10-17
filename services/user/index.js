const { User } = require('../../models/index')

async function store (params) {
  return await User
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getAll (filters) {
  return User.findAll({
    where: { ...filters }
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return User.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getOne (filters) {
  return User
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}


async function destroy (filters) {
  try {
    return User.destroy({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
