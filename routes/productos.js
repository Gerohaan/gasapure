var express = require('express')
var router = express.Router()
var controller = require('../controllers/productos')
var userValidator = require('../middleware/validator/producto')
var userSchema = require('../middleware/schema/producto')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator')
const auth = require('../middleware/auth')

router.get('/list', 
  auth, 
  controller.list
)
router.post(
  '/add',
  auth,
  checkSchema(userSchema),
  body('nombre').custom(nombre => {
    return userValidator.existsName(nombre)
  }),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router