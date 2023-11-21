const { connect } = require('mongoose');


const options = {
   useNewUrlParser: true,
}
// CONEXION AUTOMATICA A LA BASE DE DATOS.
module.exports = ( async() => {
   try {
      const URI = process.env.DB_URI || ''
      await connect(URI, options);
      console.log('Base de datos conectada');
   } catch (error) {
        console.log('Mongo error connection: ', error.message);
   }
})();

