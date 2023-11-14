const { Schema, model } = require('mongoose');

/* Estructura a guardar para los datos de equipos
{
    nombreEquipo: "", 
    participantes: [{ nombre: '', cedula: ''}]
} 
*/

const EquipoSchema = new Schema({
    nombreEquipo: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    },
    participantes: [
        {
            nombre: {
                type: String,
                trim: true // Remover los espacios al incio y final del texto recibido
            },
            cedula: {
                type: String,
                trim: true // Remover los espacios al incio y final del texto recibido
            }
        }
    ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Equipo', EquipoSchema);