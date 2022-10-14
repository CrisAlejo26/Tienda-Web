const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con =>{ /* Cuando esto pase haga lo siguiente */
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexion con la base de datos`)
    }) 
}

module.exports = connectDatabase; /* Lo hago exportable */