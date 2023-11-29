

const validarFormModalidad = (nombreModalidad = '') => { 
    if(!nombreModalidad.length) {
        return {error: true, mensaje: 'El nombre de la modalidad es requerido.'};
    }   
    return {error: false}
}

module.exports = {
    validarFormModalidad
}