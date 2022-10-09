const express = require("express"); // importamos la herramienta express
const router = express.Router(); // Enrutados
// Traemos la respuesta json desde el controlador
const {getProducts} = require("../controllers/productsController")

// Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)

module.exports = router; // Que sea visible