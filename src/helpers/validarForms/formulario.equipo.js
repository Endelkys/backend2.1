

const validarFormEquipo = (idModalidad = '', nombreCategoria = '', nombreEquipo = '', participantes = '') => {     
    if(!idModalidad.length) {
        return {error: true, mensaje: 'El ID de la modalidad es requerido.'};
    }
    if(!nombreCategoria.length) {
        return {error: true, mensaje: 'El nombre de la categoria es requerido.'};
    }
    if(!nombreEquipo.length) {
        return {error: true, mensaje: 'El nombre del equipo es requerido.'};
    }  
    if(!participantes.length) {
        return {error: true, mensaje: 'Los participantes del equipo es obligatorio.'};
    }    
    return {error: false}
}

module.exports = {
    validarFormEquipo
}