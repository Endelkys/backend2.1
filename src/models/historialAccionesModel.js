const { Schema, model} = require('mongoose');

// Entidad para que los admins tengan un control de todas las acciones que se ejecuten en el sistema.

const historialAccionesSchema = new Schema({
    metodoAccion: { // POST | GET | PUT | DELETE
        type: String,
        trim: true
    },
    descripcionAccion: { 
        type: String,
        trim: true,
    },
    ruta: { 
        type: String,
        trim: true,
    },
    usuarioId:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    },  
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('historial', historialAccionesSchema);