

class Patrocinante {  // Estos controladores los hace Endelkys.
    registrarPatrocinante(req, res) { // POST
        const datos = req.body;
        // const verificarRegistroExistente = patrocinantes.find( patrocinador => patrocinador.nombrePatrocinador === datos.nombrePatrocinador );

        res.json()
    }

    obtenerPatrocinantes(req, res) { // GET
        res.json() 
    }

    // Primer controlador nuevo agregado
    obtenerTotalPatrocinantesRegistrados(req, res) { // Endpoint para solicitar el total de registros, "Simular que la interfaz se mantenga actualizada"

    }
}

const PatrocinanteControllers = new Patrocinante();

module.exports = {
    PatrocinanteControllers
}
