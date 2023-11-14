const express = require("express");
const router = express.Router();
const { modalidadControllers } = require("../controllers/modalidad.controllers");


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-modalidad', modalidadControllers.obtenerModalidades);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-modalidad', modalidadControllers.agregarModalidad);



//Rutas con el metodo PUT -- Para editar registros existentes.


//Rutas con el metodo DELETE -- Para eliminar registros.



module.exports = router;