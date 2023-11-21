

const validarFormPatrocinante = (nombrePatrocinador = '', estadoUbicacion = '') => { 
    const isError = { error: false, inputs: [] };
    
    if(!nombrePatrocinador.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombrePatrocinador', msg: 'El nombre del patrocinador es requerido.'})
    }
    if(!estadoUbicacion.length) {
        isError.error = true;
        isError.inputs.push({input: 'estadoUbicacion', msg: 'La ubicacion es requerida.'})
    }   
    return isError;
}

module.exports = {
    validarFormPatrocinante
}