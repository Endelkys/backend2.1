

class Modalidad {  // Estos controladores los hace Miguel.
    agregarModalidad(req, res) { //POST
        const datos = req.body;
        // const verificarRegistroExistente = modalidades.find( modalidad => modalidad.nombreModalidad.toLocaleLowerCase() === datos.nombreModalidad.toLocaleLowerCase() );

        res.json({mensaje: 'Modalidad agregada con exito.'})
    }

    agregarCategoriaAModalidad(req, res) { // PUT   
    }

    editarCategoria(req, res) { // PUT  
    }


    mostrarModalidades(req, res) { //GET
    }
    
    eliminarCategoria(req, res) { // DELETE
        const { nombreModalidad, nombreCategoria } = req.body;
    }
    
    eliminarEquipoPorCategoria(req, res) { // DELETE
        const { nombreModalidad, nombreCategoria, nombreEquipo } = req.body; 
    }

}

const modalidadControllers = new Modalidad();

module.exports = {
    modalidadControllers
}
