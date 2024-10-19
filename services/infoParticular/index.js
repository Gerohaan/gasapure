const { InfoParticular } = require('../../models/index')

async function store (params) {
  return await InfoParticular
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getAll (filters) {
  return InfoParticular.findAll({
    where: { ...filters }
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return InfoParticular.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getOne (filters) {
  console.log(filters);
  
  return InfoParticular
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}


async function destroy (filters) {
  try {
    return InfoParticular.destroy({
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
