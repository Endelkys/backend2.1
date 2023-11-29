const express = require("express");
const router = express.Router();
const {verificarToken} = require('../middlewares/authToken')
const { EquipoControllers } = require("../controllers/equipo.controllers");
const { rolesConAcceso } = require("../middlewares/validarRoles")


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-equipos', EquipoControllers.obtenerEquipos);
// Segundo controlador nuevo agregado
// Saber cuantos participantes tiene cada equipo
router.get('/total-participantes-por-equipo', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], EquipoControllers.totalParticipantesPorEquipo);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-equipo', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], EquipoControllers.registrarEquipo);

//Rutas con el metodo PUT -- Para editar registros existentes.
router.put('/editar-equipo', [verificarToken, rolesConAcceso(['admin', 'editor', 'usuario'])], EquipoControllers.editarEquipo);
router.put('/remover-equipo-de-categoria',[verificarToken, rolesConAcceso(['admin'])], EquipoControllers.removerEquipoDeCategoria);


//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-equipo/:id',[verificarToken, rolesConAcceso(['admin'])], EquipoControllers.eliminarEquipo);

module.exports = router;