
const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuarioModel');
const SIGN_TOKEN = process.env.SIGN_TOKEN;


const verificarToken = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(400).json({ message: 'Accesso denegado, debes proporcionar el token.' });

        const decoded = jwt.verify(token, SIGN_TOKEN || 'secretKey');
        console.log({decoded})
        const cuentaUsuario = await UsuarioModel.findById({_id: decoded.id});
        if( !cuentaUsuario?.token_session ) return res.status(400).json({ error: 'Acceso denegado, debes estar logeado.' });
      
        req.rol = cuentaUsuario.rol
        req.id = decoded.id;
        next();
    } catch (e) {
        res.status(400).json({ error: 'El token es inválido o ya ha expirado, acceso denegado.' });
        console.log('Error: =>', e.message);
    }
}

module.exports = {
    verificarToken
}