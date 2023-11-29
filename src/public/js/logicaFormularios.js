const formUsuario = document.getElementById('registrarUsuario');
const loginForm = document.getElementById('loginForm');
const registrarApuesta = document.getElementById('registrarApuesta');

formUsuario && formUsuario.addEventListener('submit', registrarUsuario);
loginForm && loginForm.addEventListener('submit', LoginFunction);
registrarApuesta && registrarApuesta.addEventListener('submit', registrarApuestaFuncion);


function requestSettings (dataForm, token = '', method = 'POST') {
    return {
      method,
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dataForm)
    }
}


function obtenerValuesFormUsuario () {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const rol = document.getElementById('rol').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const email = document.getElementById('email').value;

    return {
        nombre,
        apellido,
        rol,
        password,
        repeatPassword,
        email
    }
}

function obtenerValuesFormLogin () {    
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    return {
        password,
        email
    }
}

function obtenerValuesFormApuesta () {    
    const nombreModalidad = document.getElementById('nombreModalidad').value;
    const nombreCategoria = document.getElementById('nombreCategoria').value;
    const nombreEquipo = document.getElementById('nombreEquipo').value;

    return {
        nombreModalidad,
        nombreCategoria,
        nombreEquipo: nombreEquipo.trim()
    }
}

async function registrarUsuario (e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/registrar-usuario', requestSettings(obtenerValuesFormUsuario()));
    const {mensaje, error, ...restDatos} = await resp.json()
    if(error) return window.alert(mensaje);

    localStorage.setItem('usuario', JSON.stringify(restDatos));
    window.location.href = `/`;
}

async function LoginFunction (e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/iniciar-sesion', requestSettings(obtenerValuesFormLogin()));
    const {mensaje, error, ...restDatos} = await resp.json();

    if(error) return window.alert(mensaje);

    localStorage.setItem('usuario', JSON.stringify(restDatos));
    window.location.href = `/`;
}

async function registrarApuestaFuncion (e) {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('usuario'))?.token;
    const resp = await fetch('http://localhost:3000/api/crear-apuesta', requestSettings(obtenerValuesFormApuesta(), token));
    const {mensaje, error} = await resp.json();

    if(error) return window.alert(mensaje);
    window.location.href = `/`;
}

