const { registrarAccion } = require('../helpers/registrarAccion')
const { validarFormModalidad } = require('../helpers/validarForms/formulario.modalidad')
const ModalidadModel = require('../models/modalidadModel');


class Modalidad {  // Estos controladores los hace Miguel.
    async agregarModalidad(req, res) { //POST
        const datos = req.body;
        const checkDataRecibida = validarFormModalidad(datos.nombreModalidad);
        if(checkDataRecibida.error) return res.json(checkDataRecibida);

        const comprobarSiExisteModalidad = await ModalidadModel.findOne({nombreModalidad: datos.nombreModalidad});
        if(comprobarSiExisteModalidad) return res.json({ error: true, mensaje: `La modalidad: '${datos.nombreModalidad}' ya se encuentra registrada`});

        const guardarModalidad = new ModalidadModel(datos);
        await guardarModalidad.save();
        await registrarAccion({
            metodoAccion: 'POST',
            ruta: 'api/registrar-modalidad',
            descripcionAccion: 'Registrando una nueva modalidad.',
            usuarioId: req.id
        });
        res.json({mensaje: 'Modalidad agregada con exito.'})
    }

    async obtenerModalidades(req, res) { //GET
        const modalidades = await ModalidadModel.find({});

        return res.json(modalidades)
    }

    async agregarCategoriaAModalidad(req, res) { // POST  
        const {idModalidad, nombreCategoria} = req.body;

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {$push: {'categorias': {nombreCategoria}}});
        await registrarAccion({
            metodoAccion: 'POST',
            ruta: 'api/agregar-categoria',
            descripcionAccion: `Agregando una categoria.`,
            usuarioId: req.id
        });
        res.json({mensaje: 'La categoria fue asignada exitosamente.'})
    }

    async editarCategoria(req, res) { 
        const {idCategoria, nombreEditado} = req.body;

        await ModalidadModel.updateOne({'categorias._id': idCategoria}, {$set: {"categorias.$.nombreCategoria": nombreEditado}}) // Para actualizar un elemento del array de categorias
        await registrarAccion({
            metodoAccion: 'PUT',
            ruta: 'api/editar-categoria',
            descripcionAccion: `Cambiando el nombre a la categoria con ID: ${idCategoria}`,
            usuarioId: req.id
        });
        res.json({mensaje: 'La categoria fue editada exitosamente.'})
    }    
      
    //Tercer nuevo endpoint
    // Saber cuantos equipos estan participando por categoria y entregar esos resultados de manera descendiente.
    async totalEquiposPorCategoria(req, res) {
        const modalidades = await ModalidadModel.find({});
        const dataTransformada = [];

        modalidades.forEach(modalidad => {
            for (const categoria of modalidad.categorias) {
                dataTransformada.push({
                    modalidad: modalidad.nombreModalidad,
                    nombreCategoria: categoria.nombreCategoria, 
                    equiposParticipando: categoria.equiposParticipantes.length
                })
            }
        });

        res.json({data: dataTransformada.sort((a, b) =>  b.equiposParticipando - a.equiposParticipando)}) // datos enviados de manera descendente
    }
    
    async eliminarCategoria(req, res) { // DELETE
        const { idCategoria, idModalidad } = req.body;

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {$pull: {categorias: {_id: idCategoria}}}) // Para remover un elemento del array de categorias
        await registrarAccion({
            metodoAccion: 'DELETE',
            ruta: 'api/eliminar-categoria',
            descripcionAccion: `Eliminando categoria.`,
            usuarioId: req.id
        });
        res.json({mensaje: 'La categoria fue eliminada exitosamente.'})
    }
}

const modalidadControllers = new Modalidad();

module.exports = {
    modalidadControllers
}
