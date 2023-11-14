const app = require('./app');
// require('./configDB/mongoConfig');

const PORT = app.get('port');  
app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`)); 