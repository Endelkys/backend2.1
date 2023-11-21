const UsuarioModel = require('../models/usuarioModel');
const {validarFormUsario} = require('../helpers/validarForms/formulario.usuario')
const { generarToken } = require('../helpers/generateToken')
const usuarioModel = require('../models/usuarioModel')
const { encryptarPassword } = require('../helpers/passwordSecurity')


class Usuario {  // Estos controladores los hace Endelkys.
    async registrarUsuario(req, res) { // POST
        const datosUsario = req.body;
        const respuestError = validarFormUsario(datosUsario);
        if(respuestError.error) return res.json(respuestError)

        const checkExistingAccount = await UsuarioModel.findOne({email: datosUsario.email});
        if(checkExistingAccount) return res.json({error: true, msg: 'El correo ya se encuentra en uso, prueba uno diferente.'})

        const crearRegistro = new UsuarioModel(datosUsario);
        const token = generarToken(crearRegistro._id, crearRegistro.rol);
        
        crearRegistro.token_session = token; // asignamos token 
        crearRegistro.password = await encryptarPassword(datosUsario.password); // encriptamos clave
        await crearRegistro.save(); // creando registro

        res.json({
            mensaje: 'Usuario registrado con exito.',
            logeado: true,
            rol: crearRegistro.rol,
            email: crearRegistro.email,
            token: crearRegistro.token_session,
            idUsario: crearRegistro._id
        })
    }

    async iniciarSesion(req, res) { // POST

        res.json({})
    }
}

const usuarioControllers = new Usuario();


module.exports = {
    usuarioControllers
}
