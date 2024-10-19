const infoComercianteService = require('../services/infoComerciante')

class infoComercianteController {


  create = (req, res, next) => {
    return infoComercianteService
      .store(req.body)
      .then(info => {
        return res.status(200).json(info)
      }) /* .catch((error) => errors.response(error)) */
      .catch(err => {
        //console.log(err);
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return infoComercianteService
      .getAll()
      .then(info => {
        return res.status(200).json(info)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return infoComercianteService
      .getOne({
        id: req.params.id
      })
      .then(info => {
        return res.status(200).json(info)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return infoComercianteService
      .update(req.body, {
        id: req.params.id
      })
      .then(info => {
        return res.status(200).json(info)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await infoComercianteService.update2(req.body, {
        id: req.params.id
      })
      let data = await infoComercianteService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return personService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Información Eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new infoComercianteController()
