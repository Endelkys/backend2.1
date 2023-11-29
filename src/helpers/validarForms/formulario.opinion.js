const { checkMongoID } = require("../mongoID")


const validarFormOpinion = ( datosOpinion ) => {     
    if(!datosOpinion?.opinion?.length) {
        return {error: true, mensaje: 'La opinión es requerida.'};
    }
    if(!datosOpinion?.expectativa?.length) {
        return {error: true, mensaje: 'La expectativa es requerida.'};
    }
    if(!datosOpinion?.puntuacion?.length) {
        return {error: true, mensaje: 'La puntuacion es requerida.'};
    }  
    if(!checkMongoID(datosOpinion.usuarioId)) {
        return {error: true, mensaje: 'Vaya.. parece que ID del usuario no tiene un formato correcto.'};
    }    
    return {error: false};
}

module.exports = {
    validarFormOpinion
}