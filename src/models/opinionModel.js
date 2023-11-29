const { Schema, model} = require('mongoose');

// Entidad para que los usuarios puedan opinar y puntuar la experiencia del torneo.

const opinionSchema = new Schema({
    opinion: { // POST | GET | PUT | DELETE
        type: String,
        trim: true
    },
    expectativa: { 
        type: String,
        trim: true,
    },
    puntuacion: { 
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

module.exports = model('opinion', opinionSchema);