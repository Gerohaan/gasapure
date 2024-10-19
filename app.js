const express = require('express');
const app = express();
const cors = require('cors')
const { sequelize } = require('./models/index')
const bodyParser = require('body-parser');
const helmet = require('helmet')
const compression = require('compression')
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
require('dotenv').config(); 
// Rutas
var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')
var userClientRouter = require('./routes/userClient')
var infoComercianteRouter = require('./routes/infoComerciante')
var infoParticularRouter = require('./routes/infoParticular')
var ventas = require('./routes/ventas')
var detalleVentas = require('./routes/detalleVentas')
var productos = require('./routes/productos')
//configuracion
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(cookieParser())
//configuracion

//Rutas use
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/userClient', userClientRouter)
app.use('/infoComerciante', infoComercianteRouter)
app.use('/infoParticular', infoParticularRouter)
app.use('/ventas', ventas)
app.use('/detalleVentas', detalleVentas) 
app.use('/productos', productos) 
//Rutas use

app.listen(app.get('port'), function () {
  console.log('Corriendos Servidor Puerto '+process.env.PORT+' y el host '+process.env.HOST+'.')

  sequelize
    .authenticate()
    .then(() => {
      console.log('Nos hemos conectado a la Base de Datos')
    })
    .catch(err => {
      console.log('Error de conexion a la base de Datos')
    })
})
module.exports = app
