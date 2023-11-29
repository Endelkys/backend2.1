const HistorialAccionesModel = require('../models/historialAccionesModel');


class Historial {
    async obtenerHistorialAcciones(req, res) { // GET
        const historialAcciones = await HistorialAccionesModel.find({}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({historialAcciones})
    }

    async obtenerHistorialAccionesByUsuario(req, res) { // brindar un control mas especifico de las acciones realizadas por un usuario.
        const _id = req.params.id;
        const historialAcciones = await HistorialAccionesModel.find({usuarioId: _id}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({totalAcciones: historialAcciones.length, historialAcciones})
    }

    async eliminarAccionById(req, res) { // Eliminar un registro de la entidad 'historial de acciones'.
        const _id = req.params.id;
        await HistorialAccionesModel.findByIdAndDelete({_id});
        res.json({mensaje: 'El registro de acción fue eliminado exitosamente.'})
    }
}

const HistorialControllers = new Historial();


module.exports = {
    HistorialControllers
}
