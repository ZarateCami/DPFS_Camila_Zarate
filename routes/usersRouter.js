var express = require('express');
const userController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', );

router.get('/login', userController.login);

router.get('/register', userController.register);


module.exports = router;
