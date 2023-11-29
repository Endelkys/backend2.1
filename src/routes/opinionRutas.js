const express = require("express");
const router = express.Router();
const {verificarToken} = require('../middlewares/authToken')
const { OpinionControllers } = require("../controllers/opinion.controllers");
const { rolesConAcceso } = require("../middlewares/validarRoles")


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-opiniones', OpinionControllers.obtenerOpiniones);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-opinion', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], OpinionControllers.registrarOpinion);


//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-opinion/:id',[verificarToken, rolesConAcceso(['admin'])], OpinionControllers.eliminarOpinion);

module.exports = router;