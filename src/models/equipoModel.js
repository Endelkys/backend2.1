const { Schema, model } = require('mongoose');

/* Estructura a guardar para los datos de equipos
{
    nombreEquipo: "", 
    participantes: "" Nombres de los participantes separados por coma (,)
} 
*/

const EquipoSchema = new Schema({
    nombreEquipo: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    },
    participantes: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Equipo', EquipoSchema);