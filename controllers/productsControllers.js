let productController = {
  createProduct: function (req, res) {
    res.render("products/create")
  },

  newProduct: function (req, res) {
    console.log(req.body)
    res.redirect("/products/list")
  },

  editProduct: function (req, res) {
    console.log(req.params.id)
    res.render("products/edit")
  },

  productList: function (req, res) {
    res.render("products/list")
  },

  productCart: function (req, res) {
  res.render("products/productCart")
},

productDetail: function (req, res) {
  const { id } = req.params
  res.render("products/productDetail", { id })
},
}

module.exports = productController
