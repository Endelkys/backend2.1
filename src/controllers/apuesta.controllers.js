const { registrarAccion } = require('../helpers/registrarAccion')
const { validarFormApuesta } = require('../helpers/validarForms/formulario.apuesta')
const ApuestaModel = require('../models/apuestaModel');



class Apuesta {
    async crearApuesta(req, res) { // POST
        const datosApuesta = req.body;
        const respuestaError = validarFormApuesta(datosApuesta);
        if(respuestaError.error) return res.json(respuestaError);

        const guardarApuesta = new ApuestaModel(datosApuesta);
        await guardarApuesta.save(); // creando registro

        await registrarAccion({
            metodoAccion: 'POST',
            ruta: 'api/crear-apuesta',
            descripcionAccion: `Registro de apuesta.`,
            usuarioId: req.id
        });
        res.json({mensaje: 'La apuesta ha sido registrada con éxito, te deseamos suerte!'})
    }


    async obtenerApuestas(req, res) { // GET
        const apuestas = await ApuestaModel.find({}).populate({path: 'equipoId'}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({totalApuestas: apuestas.length, apuestas})
    }

    async obtenerApuestasPorEquipo(req, res) { // GET
        const id = req.params.id;
        const apuestas = await ApuestaModel.find({equipoId: id}).populate({path: 'equipoId', select: 'nombreEquipo participantes'}).populate({path: 'usuarioId', select: 'email nombre apellido'});
        res.json({totalApuestas: apuestas.length, apuestas})
    }
}

const ApuestaControllers = new Apuesta();


module.exports = {
    ApuestaControllers
}
