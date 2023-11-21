const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const ModalidadRutas = require('./routes/modalidadRutas');
const PatrocinanteRutas = require('./routes/patrocinanteRutas');
const EquipoRutas = require('./routes/equipoRutas');
const UsuarioRutas = require('./routes/usuarioRutas');
const rutasPaginas = require('./routes/vistasRoutes')


const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');
app.set("views", __dirname + "/static");

// routes
app.use(rutasPaginas); // Ruta para las paginas.
app.use('/api', ModalidadRutas);
app.use('/api', PatrocinanteRutas);
app.use('/api', EquipoRutas);
app.use('/api', UsuarioRutas);

module.exports = app;


