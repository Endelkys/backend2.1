const { validarFormOpinion } = require('../helpers/validarForms/formulario.opinion')
const OpinionModel = require('../models/opinionModel');



class Opinion {
    async registrarOpinion(req, res) { // POST
        const datosOpinion = req.body;
        const respuestaError = validarFormOpinion(datosOpinion);
        if(respuestaError.error) return res.json(respuestaError);

        const guardarOpinion = new OpinionModel(datosOpinion);
        await guardarOpinion.save(); // creando registro

        res.json({mensaje: 'La opinión ha sido registrada con éxito, agradecemos tu tiempo!'})
    }


    async obtenerOpiniones(req, res) { // GET
        const opiniones = await OpinionModel.find({}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({totalOpiniones: opiniones.length, opiniones})
    }

    async eliminarOpinion(req, res) { // GET
        const id = req.params.id;
        const apuestas = await OpinionModel.find({equipoId: id}).populate({path: 'equipoId', select: 'nombreEquipo participantes'}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({totalApuestas: apuestas.length, apuestas})
    }
}

const OpinionControllers = new Opinion();


module.exports = {
    OpinionControllers
}
