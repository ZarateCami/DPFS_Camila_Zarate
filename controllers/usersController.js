let userController = {
   send: function(req, res) {        /*Camila del futuro: esta función la creó express, no yo*/
  res.send('respond with a resource');
},

login: function(req, res) {
  res.render('users/login');
},

register: function(req, res, next) {
  res.render('users/register');
}
}

module.exports = userController