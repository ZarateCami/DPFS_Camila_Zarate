const fs = require("fs")
const path = require("path")

let productPath = path.join(__dirname, "../data/products.json")
console.log(productPath)

let productController = {
  formCreate: function (req, res) {
    res.render("products/create")
  },

  createProduct: function (req, res) {
    const product = JSON.parse(fs.readFileSync(productPath, "utf-8"))
    let newProduct = {
      id: product.length + 1,
      name: req.body.name,
      description: req.body.description,
      image: req.file?.filename || "not-found.jpg",
      category: req.body.category,
      colors: req.body.colors,
      price: req.body.price,
    }
    product.push(newProduct)
    fs.writeFileSync(productPath, JSON.stringify(product, null, " "))
    res.redirect(`/products/${newProduct.id}`)
  },

  editForm: function (req, res) {
    let prodct = fs.readFileSync(productPath, "utf-8")
    let prodEjs = JSON.parse(prodct)
    let pdct = prodEjs.find((product) => product.id == req.params.id)
    res.render("products/edit", { pdct })
  },

  editProduct: function (req, res) {
    let prod = fs.readFileSync(productPath, "utf-8")
    let pr = JSON.parse(prod)
    let prodEdit = pr.find((p) => p.id == req.params.id)

   let prodEditado = {
      name: req.body.name,
      description: req.body.description,
      image: req.file?.filename || prodEdit.image,
      category: req.body.category,
      colors: req.body.colors,
      price: req.body.price,
    }
    prod.push(prodEditado)
    fs.writeFileSync(productPath, JSON.stringify(product, null, " "))
    res.redirect("/products/productDetail/${prodEditado.id}")

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
    let prod = products.find((product) => product.id == req.params.id)
    res.render("products/productDetail", { prod })
  },
}

module.exports = productController
