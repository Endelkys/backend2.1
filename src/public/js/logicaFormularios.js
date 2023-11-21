const formUsuario = document.getElementById('registrarUsuario');
formUsuario && formUsuario.addEventListener('submit', registrarUsuario);


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

async function registrarUsuario (e) {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/registrar-usuario', requestSettings(obtenerValuesFormUsuario()));
    const {mensaje, msg, error, ...restDatos} = await resp.json()

    if(error) return window.alert(msg);

    localStorage.setItem('usuario', JSON.stringify(restDatos));
    window.location.href = `/`;
}