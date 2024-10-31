var express = require('express')
const multer = require('multer');
var router = express.Router()
var controller = require('../controllers/ventas')
var userValidator = require('../middleware/validator/venta')
var userSchema = require('../middleware/schema/venta')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator')
const auth = require('../middleware/auth')
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));// Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    // Extrae la extensión del archivo original
    const extension = path.extname(file.originalname);
    // Genera un nombre único y le agrega la extensión
    const filename = `${Date.now()}-${file.originalname.split('.')[0]}${extension}`;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

router.get('/list', 
  auth, 
  controller.list
)
router.post(
  '/addUplo',
  auth,
  upload.single('comprobant'),
  controller.upload
)
router.post(
  '/add',
  auth,
  checkSchema(userSchema),
  body('referencia').custom(referencia => {
    return userValidator.existsRef(referencia)
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
router.get(
  '/showDetails/:id',
  auth,
  param('id').custom(id => {
    return userValidator.existsDetail(id)
  }),
  validator.returnErrors,
  controller.showDetails
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