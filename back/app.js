const express = require('express'); /* Estoy almacenando la libreria express en una variable*/
const app = express(); /* Estoy iniciando la libreria*/

app.use(express.json());

// Importar rutas, queremos una ruta: es productos
const productos = require("./routes/products")

app.use('/api', productos) // Sujeto a decision

module.exports = app; /* Le estoy diciendo que esta variable se va a poder exportar */

