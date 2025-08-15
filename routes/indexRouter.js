var express = require('express');
const indexController = require('../controllers/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.home);



module.exports = router;
