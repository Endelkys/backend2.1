const { Schema, model } = require('mongoose');

/* Estructura a guardar para los datos de modalidad
{
    nombreModalidad: "",
    categorias: [
        {   nombreCategoria: "", 
            equiposParticipantes: [Aca se relaciona con el modelo de 'Equipos' que contendra el nombre del equipo y sus participantes]
        }
    ]   
} 
*/

const ModalidadSchema = new Schema({
    nombreModalidad: {
        type: String,
        trim: true // Remover los espacios al incio y final del texto recibido
    },
    categorias: [
        {
            nombreCategoria: {
                type: String,
                trim: true // Remover los espacios al incio y final del texto recibido
            },
            equiposParticipantes: [{type: Schema.Types.ObjectId, ref: 'Equipo'}]
        }
    ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('modalidad', ModalidadSchema);