const { checkMongoID } = require("../mongoID")


const validarFormOpinion = ( datosOpinion ) => { 
    const isError = { error: false, inputs: [] };
    
    if(!datosOpinion?.opinion?.length) {
        isError.error = true;
        isError.inputs.push({input: 'opinion', msg: 'La opinión es requerida.'})
    }
    if(!datosOpinion?.expectativa?.length) {
        isError.error = true;
        isError.inputs.push({input: 'expectativa', msg: 'La expectativa es requerida.'})
    }
    if(!datosOpinion?.puntuacion?.length) {
        isError.error = true;
        isError.inputs.push({input: 'puntuacion', msg: 'La puntuacion es requerida.'})
    }  
    if(!checkMongoID(datosOpinion.usuarioId)) {
        isError.error = true;
        isError.inputs.push({input: 'usuarioId', msg: 'Vaya.. parece que ID del usuario no tiene un formato correcto.'})
    }    
    return isError;
}

module.exports = {
    validarFormOpinion
}