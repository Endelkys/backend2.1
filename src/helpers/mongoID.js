const { isValidObjectId } = require('mongoose');


const checkMongoID = (id)  => isValidObjectId(id); // retorna un boolean

module.exports = {
    checkMongoID
}