const express = require('express');
const cors = require('cors');
const ModalidadRutas = require('./routes/modalidadRutas');
const PatrocinanteRutas = require('./routes/patrocinanteRutas');
const EquipoRutas = require('./routes/equipoRutas');


const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.set('port', 3000); // process.env.PORT || 8080


// routes
app.use('/api', ModalidadRutas);
app.use('/api', PatrocinanteRutas);
app.use('/api', EquipoRutas);

module.exports = app;


