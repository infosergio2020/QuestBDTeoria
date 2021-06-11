var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');

// router.get('/', (req,res,next)=>{ res.render('./admin/index',{preguntas:[]}); });
router.get('/', adminController.list);
// router.get('/list', adminController.list);
router.get('/create',adminController.create_get);
router.post('/create', adminController.create);

router.get('/:id/update', adminController.update_get);
router.post('/:id/update', adminController.update);

router.post('/:id/delete', adminController.delete);
module.exports = router;