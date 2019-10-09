const bcrypt = require('bcrypt');
const database = require('./database');

const saltRounds = 10;
function encrypt(email, password, cb) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {

            database.signup(email, hash, function(data) {
                cb(data);

            })
        });
    });

}


module.exports = {
    encrypt,
    
}