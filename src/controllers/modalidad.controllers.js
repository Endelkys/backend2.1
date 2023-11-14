

class Modalidad {  // Estos controladores los hace Miguel.
    agregarModalidad(req, res) { //POST
        const datos = req.body;
        // const verificarRegistroExistente = modalidades.find( modalidad => modalidad.nombreModalidad.toLocaleLowerCase() === datos.nombreModalidad.toLocaleLowerCase() );

        res.json({mensaje: 'Modalidad agregada con exito.'})
    }

    mostrarModalidades(req, res) { //GET
    }

    agregarCategoriaAModalidad(req, res) { // PUT   
    }

    editarCategoria(req, res) { // PUT  
    }    
    
    eliminarCategoria(req, res) { // DELETE
        const { nombreModalidad, nombreCategoria } = req.body;
    }
}

const modalidadControllers = new Modalidad();

module.exports = {
    modalidadControllers
}
