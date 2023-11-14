const { connect } = require('mongoose');


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

export default ( async() => {
   try {
      const URI = ''; // process.env.DB_URI || ''
      const db = await connect(URI, options);
      console.log(`Base de datos conectada: ${db.connection.name}`);
   } catch (error: any) {
        console.log('Mongo error connection: ', error.message);
   }
})();

