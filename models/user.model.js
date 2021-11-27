const mongooese = require('mongoose');

const userSchema = mongooese.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    contact: {type: String, unique: true}
});


module.exports = mongooese.model('users', userSchema);