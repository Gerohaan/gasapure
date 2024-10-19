var express = require('express')
var router = express.Router()
var controller = require('../controllers/infoParticular')
var userValidator = require('../middleware/validator/infoParticular')
var userSchema = require('../middleware/schema/infoParticular')
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
  body('email').custom(email => {
    return userValidator.existsEmail(email)
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