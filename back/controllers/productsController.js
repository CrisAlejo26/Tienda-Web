exports.getProducts = (req, res, next) => {/* Este metodo puede que necesite, responda o ejecute una accion
al terminar algo */
    res.status(200).json({ /* Cuando el estado del servidor o su conexion sea igual
    a estado 200 entonces me va a enviar un json con lo siguiente: */
    success:true,
    message: "En esta ruta usted va a ver toda la ropa o productos"
    })
}