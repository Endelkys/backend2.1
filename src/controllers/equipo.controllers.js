const EquipoModel = require('../models/equipoModel');
const ModalidadModel = require('../models/modalidadModel');

class Equipo {  // Estos controladores los hace Luis.
    async registrarEquipo(req, res) {
        const { idModalidad, nombreCategoria, nombreEquipo, participantes } = req.body;
        const equipo = {nombreEquipo, participantes};

        const comprobarSiExisteEquipo = await EquipoModel.findOne({nombreEquipo});
        if(comprobarSiExisteEquipo) return res.json({ error: true, mensaje: `El equipo: '${nombreEquipo}' ya se encuentra registrado`});

        const guardarEquipo = new EquipoModel(equipo);
        await guardarEquipo.save();

        //Asignar equipo a la categoria
        const modalidadEncontrada = await ModalidadModel.findById({_id: idModalidad});
        const indiceCategoria = modalidadEncontrada.categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria);
        modalidadEncontrada.categorias[indiceCategoria].equiposParticipantes.push(equipo);
        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {categorias: modalidadEncontrada.categorias})

        res.json({mensaje: `El equipo ha sido registrado y asignado a la categoria: ${nombreCategoria}.`})
    }

    async obtenerEquipos(req, res) {
        const equiposAparticipar = await EquipoModel.find({});
        res.json({equiposAparticipar}) 
    }

    async editarEquipo(req, res) { 
        const datos = req.body;

        res.json();
    }
    // Segundo controlador nuevo agregado
    async totalParticipantesPorEquipo(req, res) { // Saber cuantos participantes tiene cada equipo

    }

    async removerEquipoDeCategoria(req, res) { 
        const { nombreModalidad, nombreCategoria, nombreEquipo } = req.body; 
    }

    async eliminarEquipo(req, res) { // Eliminar permanentemente 
        const _id = req.params.id
        await EquipoModel.findByIdAndDelete({_id});
        res.json({mensaje: 'Equipo eliminado exitosamente'})
    }
}

const EquipoControllers = new Equipo();

module.exports = {
    EquipoControllers
}
