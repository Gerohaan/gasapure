var express = require('express')
var router = express.Router()

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get("/", (req, res) => {
  res.send("Bienvenidos a la API de GasApure");
});

module.exports = router;
