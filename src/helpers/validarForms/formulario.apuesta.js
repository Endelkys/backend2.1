const { checkMongoID } = require("../mongoID")


const validarFormApuesta = ( datosApuesta ) => {   
    if(!datosApuesta?.nombreModalidad?.length) {
        return {error: true, mensaje: 'El nombre de la modalidad es requerido.'};
    }
    if(!datosApuesta?.nombreCategoria?.length) {
        return {error: true, mensaje: 'El nombre de la categoria es requerido.'};
    }
    if(!checkMongoID(datosApuesta.equipoId)) {
        return {error: true, mensaje: 'Vaya.. parece que ID del equipo no tiene un formato correcto.'};
    }  
    if(!checkMongoID(datosApuesta.usuarioId)) {
        return {error: true, mensaje: 'Vaya.. parece que ID del usuario no tiene un formato correcto.'};
    }    

    return {error: false}
}

module.exports = {
    validarFormApuesta
}