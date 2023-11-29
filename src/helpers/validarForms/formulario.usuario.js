const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^[0-9a-z]+$/; // se permite solo letras minusculas y numeros.


const validarFormUsario = (usuario) => {  
    if(!usuario.nombre.length) {
        return {error: true, mensaje: 'El nombre es requerido.'};
    }
    if(!usuario.apellido.length) {
        return {error: true, mensaje: 'El apellido es requerido.'};
    }
    if(!usuario.rol.length) {
        return {error: true, mensaje: 'El rol es requerido.'};
    }
    if(usuario.password.length < 6 || !passwordRegex.test(usuario.password)) {
        return {error: true, mensaje: 'Asegurate que la clave tenga al menos 6 caracteres y sea correcta.'};
    }
    if(usuario.password !== usuario.repeatPassword) {
        return {error: true, mensaje: 'Las contraseñas no coinciden.'};
    }
    if(!emailRegex.test(usuario.email)) {  
        return {error: true, mensaje: 'Email inválido'};
    }
    return {error: false};
}

module.exports = {
    validarFormUsario
}