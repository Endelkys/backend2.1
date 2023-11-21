// Roles = 'admin' | 'usuario' | 'editor'.

const rolesConAcceso = (roles) => (req, res, next) => {
    try {
        const rolUsuario = req.rol;
        if ( !roles.includes(rolUsuario) ) {
            return res.status(403).json({ 
                errorDeAcceso: true,
                msg: `El rol: '${rolUsuario}' no está autorizado para realizar esa operación.`
            });
        }
        next();
    } catch (error) {
        console.log('Error en validar rol =>', error.message);
    }
}

module.exports = {
    rolesConAcceso
}