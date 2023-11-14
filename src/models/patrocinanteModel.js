const { Schema, model } = require('mongoose');

/* Estructura a guardar para los datos de los patrocinantes
{
    nombrePatrocinador: "", 
    estadoUbicacion: "" Ejemplo: 'Trujilo, Valera, plata 3'
} 
*/

const PatrocinanteSchema = new Schema({
    nombrePatrocinador: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    },
    estadoUbicacion: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Patrocinante', PatrocinanteSchema);