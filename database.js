const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'bhanu',
    password : 'pratap1277',
    database : 'umi_database'
});
 
function connectDB(){
    connection.connect();
}

function signup(email, hash, cb){
    connection.query('insert into signup_table (email,password) values (?,?) ', [email, hash], function(err,results){
        if(err)
            throw err;
        cb(results);
    })
}

module.exports = {
    connectDB,
    signup
}