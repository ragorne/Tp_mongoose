var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        unique: true,
        required: true
    } ,
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);