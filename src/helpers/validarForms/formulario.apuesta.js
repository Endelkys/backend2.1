const { checkMongoID } = require("../mongoID")


const validarFormApuesta = ( datosApuesta ) => { 
    const isError = { error: false, inputs: [] };
    
    if(!datosApuesta?.nombreModalidad?.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombreModalidad', msg: 'El nombre de la modalidad es requerido.'})
    }
    if(!datosApuesta?.nombreCategoria?.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombreCategoria', msg: 'El nombre de la categoria es requerido.'})
    }
    if(!checkMongoID(datosApuesta.equipoId)) {
        isError.error = true;
        isError.inputs.push({input: 'equipoId', msg: 'Vaya.. parece que ID del equipo no tiene un formato correcto.'})
    }  
    if(!checkMongoID(datosApuesta.usuarioId)) {
        isError.error = true;
        isError.inputs.push({input: 'usuarioId', msg: 'Vaya.. parece que ID del usuario no tiene un formato correcto.'})
    }    
    return isError;
}

module.exports = {
    validarFormApuesta
}