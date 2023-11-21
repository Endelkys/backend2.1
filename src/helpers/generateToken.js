const jwt = require('jsonwebtoken');

const SIGN_TOKEN = process.env.SIGN_TOKEN;


const generarToken = (id, rol) => {
    const oneDay = 86400; // el token es valido durante 24hrs.
    return jwt.sign({ id, rol }, SIGN_TOKEN || 'secretKey', { expiresIn: oneDay }); 
}


module.exports = {
    generarToken
}