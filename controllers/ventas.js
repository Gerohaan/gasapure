const ventas = require('../services/ventas')
const detalleVentas = require('../services/detalleVentas')
const sendMail = require('../utils/sendMail')
class ventasController {

  async create (req, res, next) {
    try {
      const body = req.body
      const items = req.body.items
      let storeVenta = await ventas.store(body)
      if(storeVenta){
        let idStoreVenta = await storeVenta.id
        items.map(async item => {
          let saveItem = {
            idVenta: idStoreVenta,
            idProducto: item.idProducto,
            cantidad: item.cantidad,
            total: item.total
          }
          await detalleVentas.store(saveItem)
        })
        // Datos del cliente y administrador
        const clienteEmail = body.emailClient;
        const adminEmail = 'gero.delfin@gmail.com';  // Cambia esto por el correo del administrador
        // Enviar correo al cliente y al admin
        sendMail.sendMail(clienteEmail, 'Gracias por tu compra', 'Tu compra ha sido registrada correctamente, le avisaremos cuando sea confirmada por nuestros administradores.');
        sendMail.sendMail(adminEmail, 'Nueva venta registrada', `Se ha registrado una nueva venta con el ID: ${storeVenta.id} y Número de referencia: ${storeVenta.referencia}`);
        return res.status(200).json(storeVenta)
      }
      } catch (err) {
      res.status(400).send(err)
    }
  }

  async upload (req, res, next) {
    try {
    const { file } =  req 
    return res.status(200).json({
      file,
      message: "recibo adjuntado"})
    } catch (error) {
        throw error
    }
    
  }

 /*  create = (req, res, next) => {
    return ventas
      .store(req.body)
      .then(info => {
        return res.status(200).json(info)
      })
      .catch(err => {
        
        res.status(400).send(err)
      })
  } */

  list = (req, res, next) => {
    return ventas
      .getAll()
      .then(info => {
        return res.status(200).json(info)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return ventas
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
    return ventas
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
      await ventas.update2(req.body, {
        id: req.params.id
      })
      let data = await ventas.getOne({
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
        res.status(200).json({ success: 'Venta Eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new ventasController()
