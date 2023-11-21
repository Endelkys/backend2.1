const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^[0-9a-z]+$/; // se permite solo letras minusculas y numeros.


const validarFormUsario = (usuario) => { 
    const isError = { error: false, inputs: [] };
    
    if(!usuario.nombre.length) {
        isError.error = true;
        isError.inputs.push({input: 'nombre', msg: 'El nombre es requerido.'})
    }
    if(!usuario.apellido.length) {
        isError.error = true;
        isError.inputs.push({input: 'apellido', msg: 'El apellido es requerido.'})
    }
    if(!usuario.rol.length) {
        isError.error = true;
        isError.inputs.push({input: 'rol', msg: 'El rol es requerido.'})
    }
    if(usuario.password.length < 6 || !passwordRegex.test(usuario.password)) {
        isError.error = true;
        isError.inputs.push({input: 'password', msg: 'Asegurate que la clave tenga al menos 6 caracteres y sea correcta.'});
    }
    if(usuario.password !== usuario.repeatPassword) {
        isError.error = true;
        isError.inputs.push({input: 'verifyPassword', msg: 'Las contraseñas no coinciden.'});
    }
    if(!emailRegex.test(usuario.email)) {  
        isError.error = true;
        isError.inputs.push({input: 'email', msg: 'Email inválido'})  
    }
    return isError;
}

module.exports = {
    validarFormUsario
}