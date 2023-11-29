const { validarFormApuesta } = require('../helpers/validarForms/formulario.apuesta')
const ApuestaModel = require('../models/apuestaModel');



class Apuesta {
    async crearApuesta(req, res) { // POST
        const datosApuesta = req.body;
        const respuestaError = validarFormApuesta(datosApuesta);
        if(respuestaError.error) return res.json(respuestaError);

        const guardarApuesta = new ApuestaModel(datosApuesta);
        await guardarApuesta.save(); // creando registro

        res.json({mensaje: 'La apuesta ha sido registrada con éxito, te deseamos suerte!'})
    }


    async obtenerApuestas(req, res) { // POST
        const _id = req.params.id;
        await UsuarioModel.findByIdAndUpdate({_id}, { $set: { token_session: '' }}) // remover el token.

        res.json({msg: 'Sesión cerrada con éxito.'})
    }
}

const ApuestaControllers = new Apuesta();


module.exports = {
    ApuestaControllers
}
