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

    agregarCategoriaAModalidad(req, res) { // PUT   
    }

    editarCategoria(req, res) { // PUT  
    }    
      
    //Tercer nuevo controlador
    // Saber cuantos equipos estan participando por categoria y entregar esos resultados de manera descendiente.
    totalEquiposPorCategoria(req, res) {
        
    }
    
    eliminarCategoria(req, res) { // DELETE
        const { nombreModalidad, nombreCategoria } = req.body;
    }
}

const modalidadControllers = new Modalidad();

module.exports = {
    modalidadControllers
}
