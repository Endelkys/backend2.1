const express = require("express");
const router = express.Router();
const { modalidadControllers } = require("../controllers/modalidad.controllers");


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-modalidad', modalidadControllers.obtenerModalidades);
//Tercer nuevo endpoint
// Saber cuantos equipos estan participando por categoria y entregar esos resultados de manera descendiente.
router.get('/total-equipos-categoria', modalidadControllers.totalEquiposPorCategoria)

//Rutas con el metodo POST -- Para registrar
router.post('/registrar-modalidad', modalidadControllers.agregarModalidad);
router.post('/agregar-categoria', modalidadControllers.agregarCategoriaAModalidad);



//Rutas con el metodo PUT -- Para editar registros existentes.
router.put('/editar-categoria', modalidadControllers.editarCategoria);



//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-categoria', modalidadControllers.eliminarCategoria);




module.exports = router;