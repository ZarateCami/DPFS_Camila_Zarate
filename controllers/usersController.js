const fs = require ('fs');
const path = require('path')

const usersPath = path.join(__dirname, '../data/users.json')


let userController = {
   send: function(req, res) {        //Camila del futuro: esta función la creó express, no yo
  res.send('respond with a resource');
},

login: function(req, res) {
  res.render('users/login');
},

register: function(req, res, next) {

  //leer el json de usuarios
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

  //Recibir la info y armar la estructura del nuevo usuario
//   let newUser = {
//     id:,
//     name:,
//     email:,
//     phone:
//     password: 
//   }
//   res.render('users/register');

// }
}

module.exports = userController