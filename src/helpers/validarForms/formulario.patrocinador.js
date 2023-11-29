

const validarFormPatrocinante = (nombrePatrocinador = '', estadoUbicacion = '') => {     
    if(!nombrePatrocinador.length) {
        return {error: true, mensaje: 'El nombre del patrocinador es requerido.'};
    }
    if(!estadoUbicacion.length) {
        return {error: true, mensaje: 'La ubicacion es requerida.'};
    }   
    return {error: false};
}

module.exports = {
    validarFormPatrocinante
}