const express = require("express");
const router = express.Router();
const {verificarToken} = require('../middlewares/authToken')
const { HistorialControllers } = require("../controllers/historial.controllers");
const { rolesConAcceso } = require("../middlewares/validarRoles")

//Estas rutas estan autorizadas unicamente para los admins, para brindar un control y orden del sistema.

//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-historial', HistorialControllers.obtenerHistorialAcciones);

router.get('/obtener-historial-usuario/:id', [verificarToken, rolesConAcceso(['admin'])], HistorialControllers.obtenerHistorialAccionesByUsuario);


//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-accion/:id',[verificarToken, rolesConAcceso(['admin'])], HistorialControllers.eliminarAccionById);

module.exports = router;