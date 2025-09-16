function userLogged(req, res, next) {
  console.log(req.session)
  if (req.session && req.session.userLogged) {
    res.locals.islogged = true
    res.locals.userLogged = req.session.userLogged
    console.log("logueado")
  }
  next()
}

module.exports = userLogged
