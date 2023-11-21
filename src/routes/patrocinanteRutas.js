const express = require("express");
const router = express.Router();
const { PatrocinanteControllers } = require("../controllers/patrocinante.controllers");
const { verificarToken } = require("../middlewares/authToken")
const { rolesConAcceso } = require("../middlewares/validarRoles")


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-patrocinantes', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])] ,PatrocinanteControllers.obtenerPatrocinantes);
//Primer nuevo endpoint
// "Endpoint para solicitar el total de registros y que la interfaz se mantenga actualizada".
router.get('/obtener-total-patrocinantes', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], PatrocinanteControllers.obtenerTotalPatrocinantesRegistrados);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-patrocinante', [verificarToken, rolesConAcceso(['admin'])], PatrocinanteControllers.registrarPatrocinante);



module.exports = router;