const express = require("express"); // importamos la herramienta express
const router = express.Router(); // Enrutados
// Traemos la respuesta json desde el controlador
const {getProducts, newProduct, getProductsById, actualizarProducto, eliminarProducto} = require("../controllers/productsController")

// Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts) /* Url para traer todos los datos */
router.route('/producto/nuevo').post(newProduct); /* Metodo post para crear 
y establecemos la ruta */
router.route('/producto/:id').get(getProductsById); /* Ruta para busqueda por id */
router.route('/producto/:id').put(actualizarProducto); // Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(eliminarProducto) // Eliminar un producto

module.exports = router; // Que sea visible