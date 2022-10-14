// Ver la lista de productos

const productos = require("../models/productos")
const fetch = (url) => import('node-fetch').then(({default:fetch}) => fetch(url)); /* Usurpacion de fetch para no cambiar
los controladores */

exports.getProducts = async (req, res, next) => {/* Este metodo puede que necesite, responda o ejecute una accion
al terminar algo */
    const producto = await productos.find();
    res.status(200).json({ /* Cuando el estado del servidor o su conexion sea igual
    a estado 200 entonces me va a enviar un json con lo siguiente: */
    success:true,
    cantidad: producto.length, 
    producto
    })
}

// CREAR NUEVO PRODUCTO /api/productos

exports.newProduct = async(req, res, next) => { /* con el async hacemos esperar un poco la aplicacion para que no falle */
    const product = await productos.create(req.body) /* voy a crear un producto nuevo */
    /* Va a traer el json a traves del req.body */

    res.status(201).json({ /* Le respondemos con exito cuando el json se crea */
    success:true,
    product
    })
}

// CONSULTAR POR ID

exports.getProductsById = async (req, res, next) => {
    const mostrar = await productos.findById(req.params.id); /* El req es para trabajar con un dato, recibe 
    parametros y busca el id */
    if(!mostrar){ // Sino existe
        return res.status(404).json({ /* Tipo de respuesta  debe conincidir con el tipo de respuesta*/
            success:false,
            message:"El producto no existe" /* Mensaje por si no existe */
        })
    }
    res.status(200).json({ /* Cuando el estado del servidor o su conexion sea igual
    a estado 200 entonces me va a enviar un json con lo siguiente: */
        success:true,
        mensaje: "Aqui debajo encuentras la informacion sobre tu producto",
        cantidad: mostrar.length, 
        mostrar
    })
}

// Actualizar un producto

exports.actualizarProducto = async (req, res, next)=> {
    let dato = await productos.findById(req.params.id); // Variable de tipo modificable
    if(!dato){ // Sino existe. Verifico si tiene datos y sino entonces...
        return res.status(404).json({ /* Tipo de respuesta  debe conincidir con el tipo de respuesta*/
            success:false,
            message:"El producto no existe" /* Mensaje por si no existe */
        })
    }
    // Si el objeto si existia, entonces so ejecuto la actualizacion
    dato = await productos.findByIdAndUpdate(req.params.id, req.body, {/* Vamos a actualizar
    toda la informacion en lo que hay dentro del dato */
        new:true,
        runValidators:true /* Validar todos los valores y el que haya cambiado, lo actualiza */
    });
    // Respondo Ok si el producto si se actualizo
    res.status(200).json({
        success:true,
        mensaje: "Producto actualizado correctamente",
        dato
    }) 
}

// Eliminar un producto

exports.eliminarProducto = async (req, res, next)=> {
    const elemento = await productos.findById(req.params.id);
    if(!elemento){ // Sino existe. Verifico si tiene datos y sino entonces...
        return res.status(404).json({ /* Tipo de respuesta  debe conincidir con el tipo de respuesta*/
            success:false,
            message:"El producto no existe" /* Mensaje por si no existe */
        })
    }

    await elemento.remove(); /* Reajusta las posiciones cuando
    lo elimine, si usamos delete dejamos un espacio en el id */
    res.status(200).json({
        success:true,
        message: "Producto eliminado satisfactoriamente"
    })
}


// HABLEMOS DE FETCH
// Ver todos los productos

function verProductos(){
    fetch('http://localhost:4000/api/productos') // Ruta
    .then(res => res.json()) // la respuesta la convierte en json
    .then(res => console.log(res)) // La envia a consola
    .catch(err => console.error(err)) // Sino hay nada presenta el error
}

// verProductos(); Llamamos la funcion para probar la consulta

// Ver por Id

function buscarProducto(id){
    fetch('http://localhost:4000/api/producto/' + id)
    .then(res => res.json()) // la respuesta la convierte en json
    .then(res => console.log(res)) // La envia a consola
    .catch(err => console.error("no se encuentra el id"))
}

// buscarProducto('6347ec5e157bfa2ca5e3d233'); Probando el metodo buscarProducto