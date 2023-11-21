const { validarFormEquipo } = require('../helpers/validarForms/formulario.equipo')
const EquipoModel = require('../models/equipoModel');
const ModalidadModel = require('../models/modalidadModel');

class Equipo {  // Estos controladores los hace Luis.
    async registrarEquipo(req, res) {
        const { idModalidad, nombreCategoria, nombreEquipo, participantes } = req.body;
        const checkDataRecibida = validarFormEquipo(idModalidad, nombreCategoria, nombreEquipo, participantes);
        if(checkDataRecibida.error) return res.json(checkDataRecibida);
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
        const {idEquipo, idModalidad, nombreCategoria, nombreEquipo, participantes} = req.body;

        const datosActualizados = {nombreEquipo, participantes};
        const datosEquipo = await EquipoModel.findByIdAndUpdate({_id: idEquipo}, datosActualizados);

        //Actualizar equipo en la categoria
        const modalidadEncontrada = await ModalidadModel.findById({_id: idModalidad});
        const indiceCategoria = modalidadEncontrada.categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria); // encontrar el indice de la categoria que se le quiere editar el equipo
        const equipoRemovido = modalidadEncontrada.categorias[indiceCategoria].equiposParticipantes.filter(equipo => equipo.nombreEquipo !== datosEquipo.nombreEquipo); // array sin el equipo editado
        modalidadEncontrada.categorias[indiceCategoria].equiposParticipantes = [...equipoRemovido, datosActualizados]; // ponerle al array 'categorias' los datos que ya tiene sin el actuliazado + los datos del equipo actualizado

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {categorias: modalidadEncontrada.categorias}) // actualizar de una modalidad el equipo de una categoria       
        res.json({mensaje: 'El equipo ha sido actualizado exitosamente.'});
    }

    // Segundo controlador nuevo agregado
    async totalParticipantesPorEquipo(req, res) { // Saber cuantos participantes tiene cada equipo
        const equipos = await EquipoModel.find({});
        const dataTransformada = equipos.map(equipo => ({ nombreEquipo: equipo.nombreEquipo, totalParticipantes: equipo.participantes.split(',').length }))
        res.json({equipos: dataTransformada}) 
    }

    async removerEquipoDeCategoria(req, res) { 
        const { idModalidad, nombreCategoria, nombreEquipo } = req.body; 
        const modalidadEncontrada = await ModalidadModel.findById({_id: idModalidad});
        
        const indiceCategoria = modalidadEncontrada.categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria); // encontrar el indice de la categoria que se le quiere remover el equipo
        const equipoRemovido = modalidadEncontrada.categorias[indiceCategoria].equiposParticipantes.filter(equipo => equipo.nombreEquipo !== nombreEquipo); // array sin el equipo removido
        modalidadEncontrada.categorias[indiceCategoria].equiposParticipantes = equipoRemovido; // ponerle al array 'categorias' los datos sin el equipo removido

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {categorias: modalidadEncontrada.categorias}) // removiendo en el documento      
        res.json({mensaje: `El equipo ${nombreEquipo} ha sido removido de la categoria: ${nombreCategoria}.`});
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
