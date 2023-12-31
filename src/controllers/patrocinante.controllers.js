const { registrarAccion } = require('../helpers/registrarAccion')
const { validarFormPatrocinante } = require('../helpers/validarForms/formulario.patrocinador')
const PatrocinanteModel = require('../models/patrocinanteModel');

class Patrocinante {  // Estos controladores los hace Endelkys.
    async registrarPatrocinante(req, res) { // POST
        const datos = req.body;
        const checkDataRecibida = validarFormPatrocinante(datos.nombrePatrocinador, datos.estadoUbicacion);
        if(checkDataRecibida.error) return res.json(checkDataRecibida);
        
        const comprobarSiExistePatrocinante = await PatrocinanteModel.findOne({nombrePatrocinador: datos.nombrePatrocinador});
        if(comprobarSiExistePatrocinante) return res.json({ error: true, mensaje: `El patrocinador: '${datos.nombrePatrocinador}' ya se encuentra registrado`});

        const guardarPatrocinante = new PatrocinanteModel(datos);
        await guardarPatrocinante.save();
        await registrarAccion({
            metodoAccion: 'POST',
            ruta: 'api/registrar-patrocinante',
            descripcionAccion: 'Registrando patrocinante.',
            usuarioId: req.id
        });
        res.json({mensaje: 'Patrocinante registrado con exito.'})
    }

    async obtenerPatrocinantes(req, res) { // GET
        const patrocinantes = await PatrocinanteModel.find({});

        res.json({patrocinantes})
    }

    // Primer controlador nuevo agregado
    async obtenerTotalPatrocinantesRegistrados(req, res) { // Endpoint para solicitar el total de registros, "Simular que la interfaz se mantenga actualizada"
        const totalRegistros = await PatrocinanteModel.find({}).count()

        res.json({totalRegistros})
    }
}

const PatrocinanteControllers = new Patrocinante();

module.exports = {
    PatrocinanteControllers
}
