const mongoose = require('mongoose');

const productosSchema = mongoose.Schema ({ /* Respeta el diseño del Json cuando lo trae */

    nombre:{
        type: String, /* Tipo de dato que vamos a solicitar */
        required:[true, "Por favor registra el nombre del producto."], /* Si es obligatorio o no */
        trim:true,  /* Elimina los caracteres vacios o blancos */
        maxLength: [120, "El nombre es demasiado largo"] /* Establece un limite de caracteres para el nombre */    
    },
    precio:{
        type: Number,
        required: [true, "Por favor registra el precio del producto."],
        /* descarta los valores en blanco automaticamente, por eso no necesita trim */ 
        maxLength: [8, "El precio del producto no puede estar encima de 99'999.999."],
        default: 0.0 /* Por default un valor para evitar errores */
    },
    descripcion:{
        type: String,
        required: [true, "Por favor registra la descripcion del producto."],
    },
    calificacion:{
        type: Number,
        default: 0
    } ,
    imagen:[
        {
            public_id:{
                type: String,
                required: true,
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    categoria:{
        type: String,
        required:[true, "Por favor seleccione la categoria de producto."],
        enum:{
            values:[
                "Pantalones",
                "Blusas",
                "Zapatos",
                "Bolsos",
                "Jeans",
                "Chaquetas"
            ]
        }
    },
    vendedor:{
        type: String,
        required:[true, "Por favor registre el vendedor del producto."]
    },
    inventario:{
        type: Number,
        required: [true, "Por favor registra el stock del producto"],
        maxLength: [5, "Cantidad maxima del producto no puede sobrepasar 99999"],
        default: 0
    },
    numCalificaciones: {
        type: Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            },
            comentario:{
                type: String,
                required: true
            }
        }
    ],
    fechaCreacion:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('productos', productosSchema);
/* Se organiza esta plantilla (son los modelos o entidades) de tal forma que sea exportable o este controlador */
