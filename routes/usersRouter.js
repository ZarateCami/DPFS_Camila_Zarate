var express = require('express');
const userController = require('../controllers/usersController');
const { uploadUser } = require('../middlewares/multer');
var router = express.Router();

/* Vista del formulario Inicio de Sesión
//localhost:3000/users/login */

router.get('/login', userController.login);

router.post('/login', userController.processLogin)

router.post("/logout", userController.logout);

router.get('/profile', userController.profile)

router.get('/register', userController.register);

router.post('/register', uploadUser.single("profile"), userController.processRegister)

module.exports = router;
