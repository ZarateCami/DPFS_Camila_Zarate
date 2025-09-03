const fs = require("fs")
const path = require("path")

let productPath = path.join(__dirname, "../data/products.json")
console.log(productPath)

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
    let productsJson = fs.readFileSync(productPath, "utf-8") /*Lee el JSON*/
    let products = JSON.parse(productsJson) /*Lo convierte en JS*/
    res.render("products/list", {
      products,
    }) /*Renderiza la lista y envía el array de productos*/
  },

  productCart: function (req, res) {
    res.render("products/productCart")
  },

  productDetail: function (req, res) {
    let productsJson = fs.readFileSync(productPath, "utf-8") /*Lee el JSON*/
    let products = JSON.parse(productsJson) /*Lo convierte en JS*/
    let prod = products.find(product => product.id == req.params.id)
    res.render("products/productDetail", {prod})
  }
}

module.exports = productController
