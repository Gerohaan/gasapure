var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')
var userValidator = require('../middleware/validator/user')
var userSchema = require('../middleware/schema/user')
var loginSchema = require('../middleware/schema/login')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator') // 
const { correo } = require('../middleware/schema/user')
const auth = require('../middleware/auth')

router.post('/login',
  checkSchema(loginSchema),  
  body('email').custom(email => {
    return userValidator.existsEmailLogin(email)
  }),
  validator.returnErrors,
  controller.signIn
)

router.post('/logout',
auth,  
controller.signOut
)

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
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
    return personValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router