var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina principal' });
});

router.post('/questions', indexController.list_preguntas);

module.exports = router;