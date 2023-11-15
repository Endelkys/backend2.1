const express = require("express");
const router = express.Router();
const { EquipoControllers } = require("../controllers/equipo.controllers");


//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-equipos', EquipoControllers.obtenerEquipos);
router.get('/total-participantes-por-equipo', EquipoControllers.totalParticipantesPorEquipo);


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-equipo', EquipoControllers.registrarEquipo);

//Rutas con el metodo PUT -- Para editar registros existentes.
router.put('/editar-equipo', EquipoControllers.editarEquipo);


//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-equipo/:id', EquipoControllers.eliminarEquipo);

module.exports = router;