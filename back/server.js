/* Lo vamos a usar para iniciar el servidor */
const connectDatabase = require('./config/database');
const  app = require('./app');

// Setear el archivo de configuracion
// Traigo la libreria que instale
const dotenv = require('dotenv');
// Le estoy diciendo que tiene un archivo de configuracion principal
dotenv.config({path: "back/config/config.env"});
/* Le estamos iniciando un servidor local con el puerto que
creamos en config */

// Configurar base de datos
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    /* Estamos declarando que la constante server
    va hacer igual a lo siguiente: */
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`);
    /* Con el process.env.port llamo el puerto en donde esta conectado */
})