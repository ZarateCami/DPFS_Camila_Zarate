var express = require("express")
const productController = require("../controllers/productsControllers")
var router = express.Router()
const { uploadProd } = require("../middlewares/multer");

/* GET products page. */
/*GET sirve para "Obtener/Leer" información del servidor*/

router.get("/create", productController.formCreate)

/*POST sirve para "Enviar/Crear" información al servidor*/
router.post("/create", uploadProd.single('image'), productController.createProduct)

router.get("/edit/:id", productController.editForm)
/*El método para recibir la info del form sería put*/
router.put("/edit/:id", uploadProd.single('image'), productController.editProduct)

router.get("/list", productController.productList)

router.get("/productCart", productController.productCart)

router.get("/:id", productController.productDetail)

/*ME FALTA CREAR:
/products/:id (PUT)
Acción de edición (a donde se envía el formulario):
/products/:id (DELETE)
Acción de borrado*/

module.exports = router
