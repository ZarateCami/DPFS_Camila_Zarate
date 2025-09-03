var express = require('express');
const userController = require('../controllers/usersController');
var router = express.Router();

/* Vista del formulario Inicio de Sesión
//localhost:3000/users/login */

router.get('/login', userController.login);

router.get('/register', userController.register);


module.exports = router;
