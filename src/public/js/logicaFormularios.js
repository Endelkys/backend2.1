const formUsuario = document.getElementById('registrarUsuario');
const loginForm = document.getElementById('loginForm');


formUsuario && formUsuario.addEventListener('submit', registrarUsuario);
loginForm && loginForm.addEventListener('submit', LoginFunction);

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

async function registrarUsuario (e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/registrar-usuario', requestSettings(obtenerValuesFormUsuario()));
    const {mensaje, msg, error, ...restDatos} = await resp.json()

    if(error) return window.alert(msg);

    localStorage.setItem('usuario', JSON.stringify(restDatos));
    window.location.href = `/`;
}

async function LoginFunction (e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/iniciar-sesion', requestSettings(obtenerValuesFormLogin()));
    const {msg, error, ...restDatos} = await resp.json();

    if(error) return window.alert(msg);

    localStorage.setItem('usuario', JSON.stringify(restDatos));
    window.location.href = `/`;
}