const UsuarioModel = require('../models/usuarioModel');
const {validarFormUsario} = require('../helpers/validarForms/formulario.usuario')
const { generarToken } = require('../helpers/generateToken')
const { encryptarPassword, compararPassword } = require('../helpers/passwordSecurity')


class Usuario {  // Estos controladores los hace Endelkys.
    async registrarUsuario(req, res) { // POST
        const datosUsario = req.body;
        const respuestaError = validarFormUsario(datosUsario);
        if(respuestaError.error) return res.json(respuestaError);

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
            idUsario: crearRegistro._id,
            nombre: `${crearRegistro.nombre} ${crearRegistro.apellido}`
        })
    }

    async iniciarSesion(req, res) { // POST
        const datosUsario = req.body;
        const checkExistingAccount = await UsuarioModel.findOne({email: datosUsario.email});
        if(!checkExistingAccount) return res.json({error: true, msg: 'Credenciales incorrectas.'});

        const matchPasswords = await compararPassword(datosUsario.password, checkExistingAccount.password); // comprobar si coinciden las claves
        if(!matchPasswords) return res.json({error: true, msg: 'Credenciales incorrectas.'});

        const token = generarToken(checkExistingAccount._id, checkExistingAccount.rol); // generar token
        await UsuarioModel.findByIdAndUpdate({_id: checkExistingAccount._id}, { $set: { token_session: token } });

        res.json({        
            logeado: true,
            rol: checkExistingAccount.rol,
            email: checkExistingAccount.email,
            token,
            idUsario: checkExistingAccount._id,
            nombre: `${checkExistingAccount.nombre} ${checkExistingAccount.apellido}`
        })
    }

    async cerrarSesion(req, res) { // POST
        const _id = req.params.id;
        await UsuarioModel.findByIdAndUpdate({_id}, { $set: { token_session: '' }}) // remover el token.

        res.json({msg: 'Sesión cerrada con éxito.'})
    }
}

const usuarioControllers = new Usuario();


module.exports = {
    usuarioControllers
}
