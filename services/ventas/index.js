const { Venta } = require('../../models/index')

async function store (params) {
  return await Venta
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getAll (filters) {
  return Venta.findAll({
    where: { ...filters }
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Venta.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}


async function getOne (filters) {
  console.log(filters);
  
  return Venta
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}


async function destroy (filters) {
  try {
    return Venta.destroy({
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
