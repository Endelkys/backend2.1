

const validarFormEquipo = (idModalidad = '', nombreCategoria = '', nombreEquipo = '', participantes = '') => { 
    const isError = { error: false, inputs: [] };
    
    if(!idModalidad.length) {
        isError.error = true;
        isError.inputs.push({input: 'idModalidad', msg: 'El ID de la modalidad es requerido.'})
    }
    if(!nombreCategoria.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombreCategoria', msg: 'El nombre de la categoria es requerido.'})
    }
    if(!nombreEquipo.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombreEquipo', msg: 'El nombre del equipo es requerido.'})
    }  
    if(!participantes.length) {
        isError.error = true;
        isError.inputs.push({input: 'participantes', msg: 'Los participantes del equipo es obligatorio.'})
    }    
    return isError;
}

module.exports = {
    validarFormEquipo
}