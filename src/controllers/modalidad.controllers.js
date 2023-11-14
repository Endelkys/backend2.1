const ModalidadModel = require('../models/modalidadModel');


class Modalidad {  // Estos controladores los hace Miguel.
    async agregarModalidad(req, res) { //POST
        const datos = req.body;
        const comprobarSiExisteModalidad = await ModalidadModel.findOne({nombreModalidad: datos.nombreModalidad});
        if(comprobarSiExisteModalidad) return res.json({ error: true, mensaje: `La modalidad: '${datos.nombreModalidad}' ya se encuentra registrada`});

        const guardarModalidad = new ModalidadModel(datos);
        await guardarModalidad.save();
        res.json({mensaje: 'Modalidad agregada con exito.'})
    }

    async obtenerModalidades(req, res) { //GET
        const modalidades = await ModalidadModel.find({});

        return res.json(modalidades)
    }

    async agregarCategoriaAModalidad(req, res) { // POST  
        const {idModalidad, nombreCategoria} = req.body;

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {$push: {'categorias': {nombreCategoria}}});

        res.json({mensaje: 'La categoria fue asignada exitosamente.'})
    }

    async editarCategoria(req, res) { 
        const {idCategoria, nombreEditado} = req.body;

        await ModalidadModel.updateOne({'categorias._id': idCategoria}, {$set: {"categorias.$.nombreCategoria": nombreEditado}}) // Para actualizar un elemento del array de categorias
        
        res.json({mensaje: 'La categoria fue editada exitosamente.'})
    }    
      
    //Tercer nuevo controlador
    // Saber cuantos equipos estan participando por categoria y entregar esos resultados de manera descendiente.
    async totalEquiposPorCategoria(req, res) {
        
    }
    
    async eliminarCategoria(req, res) { // DELETE
        const { idCategoria, idModalidad } = req.body;

        await ModalidadModel.findByIdAndUpdate({_id: idModalidad}, {$pull: {categorias: {_id: idCategoria}}}) // Para remover un elemento del array de categorias
        
        res.json({mensaje: 'La categoria fue eliminada exitosamente.'})
    }
}

const modalidadControllers = new Modalidad();

module.exports = {
    modalidadControllers
}
