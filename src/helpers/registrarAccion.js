const HistorialAccionesModel = require('../models/historialAccionesModel');


const registrarAccion = async(infoAccion) => {
    const guardarAccionAlHistorial = new HistorialAccionesModel(infoAccion);
    await guardarAccionAlHistorial.save();
}

module.exports = {
    registrarAccion
}
