const express = require("express");
const router = express.Router();
const { modalidadControllers } = require("../controllers/modalidad.controllers");
const { rolesConAcceso } = require("../middlewares/validarRoles")
const { verificarToken } = require("../middlewares/authToken")


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-modalidad', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], modalidadControllers.obtenerModalidades);
//Tercer nuevo endpoint
// Saber cuantos equipos estan participando por categoria y entregar esos resultados de manera descendiente.
router.get('/total-equipos-categoria',[verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], modalidadControllers.totalEquiposPorCategoria)

//Rutas con el metodo POST -- Para registrar
router.post('/registrar-modalidad', [verificarToken, rolesConAcceso(['admin'])], modalidadControllers.agregarModalidad);
router.post('/agregar-categoria', [verificarToken, rolesConAcceso(['admin'])], modalidadControllers.agregarCategoriaAModalidad);



//Rutas con el metodo PUT -- Para editar registros existentes.
router.put('/editar-categoria', [verificarToken, rolesConAcceso(['admin', 'editor'])], modalidadControllers.editarCategoria);



//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-categoria', [verificarToken, rolesConAcceso(['admin'])],modalidadControllers.eliminarCategoria);




module.exports = router;