const express = require("express");
const router = express.Router();
const { PatrocinanteControllers } = require("../controllers/patrocinante.controllers");


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-patrocinantes', PatrocinanteControllers.obtenerPatrocinantes);
//Primer nuevo endpoint
// "Endpoint para solicitar el total de registros y que la interfaz se mantenga actualizada".
router.get('/obtener-total-patrocinantes', PatrocinanteControllers.obtenerTotalPatrocinantesRegistrados);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-patrocinante', PatrocinanteControllers.registrarPatrocinante);



module.exports = router;