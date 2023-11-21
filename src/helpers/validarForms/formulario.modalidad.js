

const validarFormModalidad = (nombreModalidad = '') => { 
    const isError = { error: false, inputs: [] };
    
    if(!nombreModalidad.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombreModalidad', msg: 'El nombre de la modalidad es requerido.'})
    }   
    return isError;
}

module.exports = {
    validarFormModalidad
}