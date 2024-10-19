const { InfoComerciante } = require('../../models/index')

async function store (params) {
  return await InfoComerciante
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getAll (filters) {
  return InfoComerciante.findAll({
    where: { ...filters }
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return InfoComerciante.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getOne (filters) {
  console.log(filters);
  
  return InfoComerciante
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}


async function destroy (filters) {
  try {
    return InfoComerciante.destroy({
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
