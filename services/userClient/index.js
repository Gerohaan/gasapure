const { UserClient } = require('../../models/index')

async function store (params) {
  return await UserClient
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getAll (filters) {
  return UserClient.findAll({
    where: { ...filters },
    include: [
      {
        association: 'rol'
      }
    ]
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return UserClient.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getOne (filters) {
  console.log(filters);
  
  return UserClient
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}


async function destroy (filters) {
  try {
    return UserClient.destroy({
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
