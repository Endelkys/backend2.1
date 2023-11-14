const { connect } = require('mongoose');


const options = {
   useNewUrlParser: true,
}

module.exports = ( async() => {
   try {
      const URI = 'mongodb+srv://Endelkys:secretkey@cluster0.qvkhdnd.mongodb.net/?retryWrites=true&w=majority'; // process.env.DB_URI || ''
      const db = await connect(URI, options);
      console.log('Base de datos conectada');
   } catch (error) {
        console.log('Mongo error connection: ', error.message);
   }
})();

