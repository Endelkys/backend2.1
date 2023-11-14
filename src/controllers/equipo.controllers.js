

class Equipo {  // Estos controladores los hace Luis.
    registrarEquipo(req, res) {
        const { nombreModalidad, nombreCategoria, nombreEquipo, participantes } = req.body;
    }

    mostrarTodosLosEquipos(req, res) {
        res.json() // mostrando Equipos a participar en una modalidad en especifico
    }

    editarEquipo(req, res) { 
        const datos = req.body;

        res.json();
    }

    removerEquipoDeCategoria(req, res) { 
        const { nombreModalidad, nombreCategoria, nombreEquipo } = req.body; 
    }

    eliminarEquipo(req, res) { // Eliminar permanentemente 
        
    }
}

const EquipoControllers = new Equipo();

module.exports = {
    EquipoControllers
}
