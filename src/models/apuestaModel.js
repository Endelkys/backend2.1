const { Schema, model} = require('mongoose');


const ApuestaSchema = new Schema({
    nombreModalidad: {
        type: String,
        trim: true
    },
    nombreCategoria: {
        type: String,
        trim: true,
    },
    equipoId:{
        type: Schema.Types.ObjectId,
        ref: 'Equipo'
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

module.exports = model('Apuesta', ApuestaSchema);