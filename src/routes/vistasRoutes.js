const express = require("express");
const router = express.Router();
const ModalidadModel = require('../models/modalidadModel');
const axios = require('axios')

// En este archivo de rutas no se crearon los controladores por separado ya que el codigo es muy repetitivo y la vez corto y legible.

//Rutas con el metodo GET -- Para obtener las vistas.
router.get('/', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('home');
});

router.get('/login', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('login');
});

router.get('/registrarse', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('registrarse');
});

router.get('/registro-modalidad', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('registroModalidad');
});

router.get('/registro-categoria', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('registroCategoria');
});

router.get('/crear-apuesta', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('registroApuesta');
});

router.get('/crear-opinion', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('registroOpinion');
});

router.get('/registro-equipo', (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    res.render('registroEquipo');
});

router.get('/registro-patrocinador', (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    res.render('registroPatrocinador');
});

router.get('/modalidades', async(req, res) => { 
    const {data} = await axios.get('http://localhost:3000/api/obtener-modalidad');
    res.setHeader('Content-Type', 'text/html');
    res.render('modalidadesRegistradas', {modalidades: data});
});

router.get('/patrocinadores', async(req, res) => { 
    const {data} = await axios.get('http://localhost:3000/api/obtener-patrocinantes');
    res.setHeader('Content-Type', 'text/html');
    res.render('patrocinadores', {patrocinantes: data.patrocinantes});
});

router.get('/equipos', async(req, res) => { 
    const {data} = await axios.get('http://localhost:3000/api/obtener-equipos');
    res.setHeader('Content-Type', 'text/html');
    res.render('equipos', {equiposAparticipar: data.equiposAparticipar});
});


module.exports = router;