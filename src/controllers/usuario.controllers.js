const UsuarioModel = require('../models/usuarioModel');

class Usuario {  // Estos controladores los hace Endelkys.
    async registrarUsuario(req, res) { // POST
        const datos = req.body;
        
        res.json({mensaje: 'Usuario registrado con exito.'})
    }

    async iniciarSesion(req, res) { // POST

        res.json({})
    }
}

const usuarioControllers = new Usuario();

module.exports = {
    usuarioControllers
}
