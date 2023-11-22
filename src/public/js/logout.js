const logoutBtn = document.getElementById('logoutBtn');
logoutBtn && logoutBtn.addEventListener('click', logoutFunction);


function ajustesSolicitud (dataForm, token = '', method = 'POST') {
    return {
      method,
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dataForm)
    }
}

async function logoutFunction () {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    await fetch(`http://localhost:3000/api/cerrar-sesion/${usuario.idUsario}`, ajustesSolicitud({}, '', 'PUT'));
    localStorage.setItem('usuario', JSON.stringify({logeado: false}));
    window.location.replace('/login')
}