const bcryptjs = require("bcryptjs")
const fs = require("fs")
const path = require("path")

const usersPath = path.join(__dirname, "../data/users.json")

let userController = {
  send: function (req, res) {
    //Camila del futuro: esta función la creó express, no yo
    res.send("respond with a resource")
  },

  login: function (req, res) {
    res.render("users/login")
  },

  processLogin: function (req, res) {
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"))
    let findUser = users.find((user) => user.email == req.body.email)
    if (findUser) {
      if (bcryptjs.compareSync(req.body.password, findUser.password)) {
        req.session.userLogged = findUser
        return res.redirect("/users/profile")
      } else {
        return res.render("users/login", {
          error: "Los datos ingresados son inválidos",
        })
      }
    } else {
      return res.render("users/login", {
        error: "Los datos ingresados son inválidos",
      })
    }
  },

  register: function (req, res, next) {
    res.render("users/register")
  },

  processRegister: function (req, res, next) {
    //leer el json de usuarios
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"))
    let findUser = users.find((user) => user.email == req.body.email)
    if (findUser) {
      return res.render("users/register", {
        error: "El usuario ya se encuentra registrado",
      })
    }
    console.log(req.file)
    //Recibir la info y armar la estructura del nuevo usuario
    let newUser = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      profile: req.file?.filename || "default-profile.png",
      phone: req.body.phone,
      password: bcryptjs.hashSync(req.body.password, 10),
    }

    // Agregar el usuario nuevo al Array de usuarios
    users.push(newUser)
    // Actualizar el archivo con lo nuevo
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "))
    // Redireccionar al login
    res.redirect("/users/login")
  },

  profile: function(req, res){
    res.render("users/profile")
  }
}
module.exports = userController
