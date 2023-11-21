const { Schema, model} = require('mongoose');


const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    rol: {
        type: String,
        enum: ['editor', 'admin'],
        default: 'editor'
    },
    token_session: String,
    },  
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Usuario', UsuarioSchema);