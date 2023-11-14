const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.set('port', 3000); // process.env.PORT || 8080


// routes
// app.use('/api', rutasCampeonato);



module.exports = app;


