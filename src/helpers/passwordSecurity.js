const bcrypt = require('bcrypt');


const encryptarPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
const compararPassword = async (receivedPassword, passwordSaved) => {
    return await bcrypt.compare(receivedPassword, passwordSaved);
}


module.exports =  {
    encryptarPassword,
    compararPassword,
}