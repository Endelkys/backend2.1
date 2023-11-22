const express = require("express");
const router = express.Router();
const { usuarioControllers } = require("../controllers/usuario.controllers");


//Rutas con el metodo POST
router.post('/registrar-usuario', usuarioControllers.registrarUsuario);
router.post('/iniciar-sesion', usuarioControllers.iniciarSesion);
router.put('/cerrar-sesion/:id', usuarioControllers.cerrarSesion);



module.exports = router;