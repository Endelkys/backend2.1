const express = require("express");
const router = express.Router();
const {verificarToken} = require('../middlewares/authToken')
const { ApuestaControllers } = require("../controllers/apuesta.controllers");
const { rolesConAcceso } = require("../middlewares/validarRoles")


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-apuestas', ApuestaControllers.obtenerApuestas);
router.get('/obtener-apuestas-by-equipo/:id', ApuestaControllers.obtenerApuestasPorEquipo);

//Rutas con el metodo POST -- Para registrar
router.post('/crear-apuesta', [verificarToken, rolesConAcceso(['usuario', 'admin', 'editor'])], ApuestaControllers.crearApuesta);


module.exports = router;